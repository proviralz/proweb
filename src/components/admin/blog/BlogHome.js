import React, { useEffect, useState } from 'react'
import Layout from '../dashboard/Layout'
import { BsPlus } from 'react-icons/bs'
import { blogData } from './data'
import Image from 'next/image'
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import { publicRequest } from '@/requestMethods'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage'
import { app } from '../../../../lib/firebase'

const BlogHome = () => {

    const [isEditorOpen, setIsEditorOpen] = useState(false);
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [featuredImage, setFeaturedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    const [posts, setPosts] = useState([]);

    const mdParser = new MarkdownIt();

    const fetchPosts = async () => {
        try {
            const res = await publicRequest.get('blog');
            setPosts(res.data);
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    };


    // Fetch posts
    useEffect(() => {
        
        fetchPosts();
    }, []);

    

    const handlePost = async () => {

        const postData = {
            title,
            content,
            image: imageUrl, // Save the uploaded image URL with the post
        };
        try {
            await publicRequest.post('blog', postData);
            setIsEditorOpen(false);
            setContent('');
            setTitle('');
            setFeaturedImage(null)
            setImageUrl('')
            fetchPosts(); // Refresh the posts after adding a new one
        } catch (error) {
        console.error("Error posting blog:", error);
        }
    };

    const handleEditorChange = ({ html, text }) => {
        setContent(text);
    };

    const handlePreview = () => {
        alert(content); // This will be replaced with a more appropriate preview
    };

    // const handlePost = () => {
    //     // Implement the logic to post the article
    //     console.log('Posted content:', content);
    //     setIsEditorOpen(false);
    //     setContent('');
    // };


    const handleImageSelect = (e) => {
        const file = e.target.files?.[0];
        setFeaturedImage(file);
        if (file) handleImageUpload(file);
    };




    const handleImageUpload =(file)=> {
        const fileName = new Date().getTime() + file?.name
        const storage = getStorage(app)
        const storageRef = ref(storage, fileName)
        const uploadTask = uploadBytesResumable(storageRef, file)

        uploadTask.on('state_changed', 
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                // console.log('Upload is ' + progress + '% done');
                // setPosterProgress(progress)
                switch (snapshot.state) {
                case 'paused':
                    // console.log('Upload is paused');
                    break;
                case 'running':
                    // console.log('Upload is running');
                    break;
                    default:
                }
            }, 
            (error) => {
                // Handle unsuccessful uploads
            }, 
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    // console.log(downloadURL)
                    setImageUrl(downloadURL)
                });
            }
        );
    }


  return (
    <div>
      <Layout>
        <div className=' p-5 bg-white rounded-lg relative'>
            <div className=' flex justify-end'>
                <div>
                    <p 
                        onClick={() => setIsEditorOpen(true)} 
                        className=' flex items-center text-fuchsia-950 text-sm font-semibold px-3 py-1 rounded-sm bg-fuchsia-800/10'>
                        <BsPlus size={25} /> Write an article
                    </p>
                </div>
            </div>

            {isEditorOpen && (
                <div>
                    <div className="modal-backdrop" onClick={() => setIsEditorOpen(false)}></div>
                    <div className="modal-content">
                        <div>
                            <div className=' text-center mb-5'>
                                <p className=' font-bold'>
                                    Create an article
                                </p>
                            </div>
                            <div className=' border-t border-b py-3 px-2 mb-5 flex items-center gap-2'>
                                <div>
                                    <p className=' font-semibold'>
                                        Title:
                                    </p>
                                </div>
                                <div className=' w-full'>
                                    <input 
                                        type="text" 
                                        name="" 
                                        id="" 
                                        onChange={(e) => setTitle(e.target.value)}
                                        className=' w-full outline-none' />
                                </div>
                            </div>

                            <div className=' mb-10 flex items-center gap-8'>
                                <div>

                                    <label className=' border py-3 px-5 rounded-full border-neutral-500' htmlFor="featured">Choose featured image</label>
                                    <input
                                        type="file"
                                        name='featured'
                                        id='featured'
                                        className='hidden'
                                        accept='.jpg,.jpeg,.png'
                                        onChange={handleImageSelect}
                                    />
                                </div>
                                {imageUrl && (
                                    <Image
                                        src={imageUrl}
                                        alt="Featured"
                                        height={100}
                                        width={100}
                                        className="mt-2 w-20 h-auto"
                                    />
                                )}
                            </div>
                        </div>
                        <MdEditor
                            value={content}
                            style={{ height: '400px' }}
                            renderHTML={(text) => mdParser.render(text)}
                            onChange={handleEditorChange}
                        />
                        <div className="mt-3 flex justify-end gap-3">
                            {/* <button className="px-3 py-1 bg-gray-300 rounded" onClick={handlePreview}>
                                Preview
                            </button> */}
                            <button className="px-3 py-1 bg-fuchsia-900 text-white rounded" onClick={handlePost}>
                                Post
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className=' mt-5'>
                <div className=' grid grid-cols-2 gap-10'>
                    {posts?.map((blog, i)=> (
                        <div key={i} className=' flex gap-3'>
                            <div className=' min-w-36 h-28 rounded-md bg-slate-400 overflow-hidden'>
                                <Image src={blog.image} alt='' width={100} height={100} className=' object-cover h-full w-full' />
                            </div>
                            <div className=' flex flex-col justify-between '>
                                <div>
                                    <p className=' font-semibold'>
                                        {blog?.title}
                                    </p>
                                </div>
                                <div>
                                    <p className=' text-sm'>
                                        {blog?.content.split(" ").slice(0, 10).join(' ')}...
                                    </p>
                                </div>
                                <div>
                                    <p className=' text-xs'>
                                        August 13th
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </Layout>
    </div>
  )
}

export default BlogHome
