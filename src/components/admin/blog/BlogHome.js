import React, { useState } from 'react'
import Layout from '../dashboard/Layout'
import { BsPlus } from 'react-icons/bs'
import { blogData } from './data'
import Image from 'next/image'
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';

const BlogHome = () => {

    const [isEditorOpen, setIsEditorOpen] = useState(false);
    const [content, setContent] = useState('');

    const mdParser = new MarkdownIt();

    const handleEditorChange = ({ html, text }) => {
        setContent(text);
    };

    const handlePreview = () => {
        alert(content); // This will be replaced with a more appropriate preview
    };

    const handlePost = () => {
        // Implement the logic to post the article
        console.log('Posted content:', content);
        setIsEditorOpen(false);
        setContent('');
    };


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
                                    <input type="text" name="" id="" className=' w-full outline-none' />
                                </div>
                            </div>
                        </div>
                        <MdEditor
                            value={content}
                            style={{ height: '400px' }}
                            renderHTML={(text) => mdParser.render(text)}
                            onChange={handleEditorChange}
                        />
                        <div className="mt-3 flex justify-end gap-3">
                            <button className="px-3 py-1 bg-gray-300 rounded" onClick={handlePreview}>
                                Preview
                            </button>
                            <button className="px-3 py-1 bg-fuchsia-900 text-white rounded" onClick={handlePost}>
                                Post
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className=' mt-5'>
                <div className=' grid grid-cols-2 gap-10'>
                    {blogData.map((blog, i)=> (
                        <div key={i} className=' flex gap-3'>
                            <div className=' min-w-36 h-28 rounded-md bg-slate-400 overflow-hidden'>
                                <Image src={blog.img} alt='' width={100} height={100} className=' object-cover h-full w-full' />
                            </div>
                            <div className=' flex flex-col justify-between '>
                                <div>
                                    <p className=' font-semibold'>
                                        {blog.title}
                                    </p>
                                </div>
                                <div>
                                    <p className=' text-sm'>
                                        {blog.text.split(" ").slice(0, 10).join(' ')}...
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
