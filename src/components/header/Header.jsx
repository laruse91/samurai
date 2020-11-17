import React from "react";
import style from "./Header.module.css";

class Header extends React.Component {
 render() {
   return (
      <header className={style.header}>
        <div className={style[`title-container`]}>
          <img src="https://iqonic.design/themes/socialv/html/images/logo.png" alt="logo" className={style.logo}/>
          <h1 className={style.title}>Social Page</h1>
          <img
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iNTEycHgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+CjwhW0NEQVRBWwoJLnN0MHtkaXNwbGF5OmlubGluZTt9Cgkuc3Qxe2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MTY7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KCS5zdDJ7ZGlzcGxheTpub25lO30KXV0+Cjwvc3R5bGU+PGcgY2xhc3M9InN0MiIgaWQ9IkxheWVyIj48ZyBjbGFzcz0ic3QwIj48cG9seWxpbmUgY2xhc3M9InN0MSIgcG9pbnRzPSI4OSwzODYgNDI0LDM4NiA0MjQsMzg1Ljk5OSAgICIvPjxwb2x5bGluZSBjbGFzcz0ic3QxIiBwb2ludHM9Ijg5LDI1NyA0MjQsMjU3IDQyNCwyNTYuOTk5ICAgIi8+PHBvbHlsaW5lIGNsYXNzPSJzdDEiIHBvaW50cz0iODksMTI3IDQyNCwxMjcgNDI0LDEyNi45OTkgICAiLz48L2c+PC9nPjxnIGlkPSJMYXllcl9jb3B5Ij48Zz48cGF0aCBkPSJNNDI0LDM5NEg4OWMtNC40MTgsMC04LTMuNTgyLTgtOHMzLjU4Mi04LDgtOGgzMzVjNC40MTgsMCw4LDMuNTgyLDgsOFM0MjguNDE4LDM5NCw0MjQsMzk0eiIvPjwvZz48Zz48cGF0aCBkPSJNNDI0LDI2NUg4OWMtNC40MTgsMC04LTMuNTgyLTgtOGMwLTQuNDE4LDMuNTgyLTgsOC04aDMzNWM0LjQxOCwwLDgsMy41ODIsOCw4QzQzMiwyNjEuNDE4LDQyOC40MTgsMjY1LDQyNCwyNjV6Ii8+PC9nPjxnPjxwYXRoIGQ9Ik00MjQsMTM1SDg5Yy00LjQxOCwwLTgtMy41ODItOC04czMuNTgyLTgsOC04aDMzNWM0LjQxOCwwLDgsMy41ODIsOCw4UzQyOC40MTgsMTM1LDQyNCwxMzV6Ii8+PC9nPjwvZz48L3N2Zz4="
            alt="ico" className={style.menu}/>
        </div>
        <div className={style.search}>
          <form action="#" className={style[`search-form`]}>
            <input type="search" placeholder="Type here to search" className={style[`search-input`]}/>
          </form>
        </div>
        <div className={style[`user-container`]}>
        <img src="https://4.downloader.disk.yandex.ru/preview/094ccd40c9e4557a4a914ce119e1ee0aa3aa143f71ad52057be44a6583e9c0ed/inf/vCI1taciqDdxl-O7FW4UcoFhjPhj2ysFi_ybQPJ7XLLJ2r-S6PkGbMrRHnOvczSZn-XsSTp_AtE_aQtoO5lctA%3D%3D?uid=81903395&filename=user-profile.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=81903395&tknv=v2&size=1263x520" alt="ico" className={style[`user-photo`]}/>
          <h3 className={style[`user-name`]}>Helena Jackly</h3>
          <div className={style.notifications}>
            <img src="https://2.downloader.disk.yandex.ru/preview/b7d86c92043fa44debebfaee432c8a8a74fae20d882e251447c642dc93c673ab/inf/KkmhsvGCHdjV3lAnGzTQ52J4Imw0DFeONjYMxkfQ_5zk7GlOkZWipEH5q3AkYjTLGwW1m-8qdBKKYY_ABTSzgQ%3D%3D?uid=81903395&filename=notification.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=81903395&tknv=v2&size=621x510" alt="ico" className={style[`notifications-ico`]}/>
            <img src="https://3.downloader.disk.yandex.ru/preview/5595eae009965b06c1708ceba3ba694872738bad8c39b1b394de5581fe193a13/inf/6tjzYEKgjL5IQbugMvQu7-34X5PFwn5JNXdKHJPp3HAspSnjlAhWXmwsenpPs6RbRKfzonTpTNvEUcyPL9-PXg%3D%3D?uid=81903395&filename=messages.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=81903395&tknv=v2&size=621x510" alt="ico" className={style[`notifications-ico`]}/>
            <img src="https://3.downloader.disk.yandex.ru/preview/ec118e9e9529907fb4d7ba08b11aa3bc51c4b9b2d22f0df409013dca2158a170/inf/svHeM24Y-uY3FdllcP-kjYFhjPhj2ysFi_ybQPJ7XLLXCn3B9ZYzHfD_WUZRPc1JLxsfuEkczNpaCrl8SzFw-Q%3D%3D?uid=81903395&filename=down-arrow.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=81903395&tknv=v2&size=621x510" alt="ico" className={style[`notifications-ico`]}/>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
