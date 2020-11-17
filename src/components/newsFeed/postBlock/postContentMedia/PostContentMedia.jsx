import React from 'react';
import style from './PostContentMedia.module.css'


const PostContentMedia = (props) => {

    return (

        <div className={style.contentMedia}>
            <img
                src="https://1.downloader.disk.yandex.ru/preview/09fd1c141117318e4ca4f493406772e425adb7eb753bb31525957a2c39a9d8df/inf/CY1FFKPhy-6B8XEIYFPWLnSB7vNpiLj_HqcdkhAWlgieFaEN_AXFt7agLJMi9PFdL5FauAxzBPcDFG-pgrlBXg%3D%3D?uid=81903395&filename=user-content-photo1.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=81903395&tknv=v2&size=1349x625"
                alt="ico" className={style.img1}/>
            <img
                src="https://2.downloader.disk.yandex.ru/preview/e96d4c97644436165cd8e4ebe08bd5d88fd9b9c55b5c2c7d4b1f614aedf22182/inf/7oTJ3TgNqqKn71UDJH9zPQnmeWnx9do1ZU6v209lqLFg7NwuxMYBss08t3nnkoT5g5GW5I0QqstrNXNUIS8oqQ%3D%3D?uid=81903395&filename=user-content-photo2.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=81903395&tknv=v2&size=1349x625"
                alt="ico" className={style.img2}/>
            <img
                src="https://2.downloader.disk.yandex.ru/preview/173672bbecb3522c3281c9200efcf987c41bf1c486f30b2be8ffe3f9ce9b0a44/inf/gXoyHb0-uGYIfLxwi-_V8wolLid69i7r8hhjvKb3fPPq16h6JLw_G14g9rQK3mJfMKzB6Zowtch0sB7_pWGqfA%3D%3D?uid=81903395&filename=user-content-photo3.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=81903395&tknv=v2&size=1349x625"
                alt="ico" className={style.img3}/>
        </div>
    )
}

export default PostContentMedia;