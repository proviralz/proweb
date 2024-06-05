import { publicRequest } from "@/requestMethods"
import { updateError, updateStart, updateSuccess } from "./affiliateUserSlice"

export const affiliateLogin = async (user, dispatch) => {
    dispatch(updateStart())

    try {
        const res = await publicRequest.post('affiliateauth/login', user)
        dispatch(updateSuccess(res.data))

        return res
    } catch (error) {
        dispatch(updateError())
        throw error
    }
}