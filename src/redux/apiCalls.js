import { publicRequest } from "@/requestMethods"
import { updateError, updateStart, updateSuccess } from "./userSlice"
import { updateAdminError, updateAdminStart, updateAdminSuccess } from "./adminUserSlice"

export const login = async (user, dispatch) => {
    dispatch(updateStart())

    try {
        const res = await publicRequest.post('auth/login', user)
        dispatch(updateSuccess(res.data))

        return res
    } catch (error) {
        dispatch(updateError())
        throw error
    }
}



export const adminLogin = async (user, dispatch) => {
    dispatch(updateAdminStart())

    try {
        const res = await publicRequest.post('auth/admin/login', user)
        dispatch(updateAdminSuccess(res.data))

        return res
    } catch (error) {
        dispatch(updateAdminError())
        throw error
    }
}
