import { notify } from "../../config";
export const getToken = () => localStorage.getItem('auth_token');
export const deleteToken = () => localStorage.removeItem('auth_token');
export const setTokenUtils = (token) => {
    localStorage.setItem('auth_token', token)
}

export const setAdminUtils = (data) => {
    setTokenUtils(data.access_token)
    localStorage.setItem('admin_data', JSON.stringify(data?.user))
    window.location.assign("/admin/dashboard")
}

export const getAdminUtils = (itemkey) => {
    const item = localStorage.getItem(itemkey)
    const item_ = item ? JSON.parse(item) : ""
    return item_
}

export const reloadPage = () => {
    setTimeout(() => {
        window.location.reload()
    }, 3000)
}

export const redirectTo = (page_route) => {
    setTimeout(() => {
        window.location.assign(page_route)
    }, 3000)
}

export const errorHandler = (error) => {
    if (error?.response?.status == 422) {
        notify(error?.response?.data?.error?.message)
        notify(error?.response?.data?.message)
        notify(error?.response?.data?.error)
        return notify(error?.response?.data?.errors?.message)
    }
    if (error?.response?.status == 503) {
        //console.log(error?.response)
        notify(error?.response?.data?.error)
    }
    if (error?.response?.status == 500) {
        //console.log(error?.response)
        notify("Sorry internal server error !!! please try again later")
    }
    console.error('error_status', error);
    notify(error?.response?.data?.message)
    if (error?.response?.status == 400) {
        notify(error?.response?.data?.data?.message)
    }

    if (error?.response?.status === 401 || error?.response?.status === 404) {
        notify("Failed to process please try again later")
    }
    return Promise.reject(error);
}
export const decimalize = (num) => {
    return parseInt(num).toFixed(2)
}