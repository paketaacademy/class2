export const NAV_BAR = [
    "World", "U.S", "Politics", "NY", "Business", "Options", "Tech", "Science", "Health", "Sport", "Books", "Style", "Food", "Travel", "Magazine", "T Magazine", "Real Estate", "Video"
]

function NavBar(array){
    for (let i = 0; i < array.lenght; i++){
        boxNavBar.innerHTML = `
            <li class="link-nav-bar">
                <a href="post.html" class="link-nav">${array[i]}</a>
            </li>
        `
    }
}