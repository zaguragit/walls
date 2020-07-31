import org.w3c.dom.*
import org.w3c.xhr.XMLHttpRequest
import kotlin.browser.document
import kotlin.dom.addClass

fun main() {

    val blurFilter = "blur(15px)"

    val http = XMLHttpRequest()
    http.open("GET", "https://lposidon.github.io/walls/index", true)

    val scroll = get("scroll")!! as HTMLDivElement
    val popup = get("popup")!! as HTMLDivElement
    val popupWall = get("wall")!! as Image
    val popupWallName = get("name")!!
    val popupWallDownload = get("download")!! as HTMLAnchorElement
    val popupWallAuthor = get("author")!!
    val title = get("title")!! as HTMLElement
    val topBar = get("topBar")!! as HTMLSpanElement
    val copyright = get("copyright")!! as HTMLElement

    http.onreadystatechange = {
        if (http.readyState == 4.toShort()) {
            if (http.status == 200.toShort() || http.status == 0.toShort()) {
                val string = http.responseText
                var tmpName = ""
                var tmpAuthor = ""
                var tmpDir = ""
                var tmpType = ""
                for (line in string.lines()) {
                    if (line.isEmpty()) {
                        scroll.appendChild(document.createElement("div").apply {
                            addClass("card")
                            appendChild(Image().apply {
                                src = when (tmpType) {
                                    "svg" -> "./img/$tmpDir/img.svg"
                                    else -> "./img/$tmpDir/thumb.jpg"
                                }
                            })
                            appendChild(document.createElement("p").apply {
                                textContent = tmpName
                            })
                            val dir = tmpDir
                            val name = tmpName
                            val author = tmpAuthor
                            val type = tmpType
                            addEventListener("click", {
                                document.body!!.style.overflowY = "hidden"
                                scroll.style.filter = blurFilter
                                title.style.filter = blurFilter
                                topBar.style.filter = blurFilter
                                copyright.style.filter = blurFilter
                                popup.style.display = "block"
                                val newSrc: String
                                when (type) {
                                    "svg" -> {
                                        newSrc = "./img/$dir/img.svg"
                                        if (popupWall.src != newSrc) {
                                            popupWall.src = ""
                                            popupWall.src = newSrc
                                        }
                                    }
                                    else -> {
                                        newSrc = "./img/$dir/img.png"
                                        if (popupWall.src != newSrc) {
                                            popupWall.src = ""
                                            popupWall.src = "./img/$dir/thumb.jpg"
                                            popupWall.src = newSrc
                                        }
                                    }
                                }
                                popupWallName.textContent = name
                                popupWallAuthor.textContent = author
                                popupWallDownload.apply {
                                    this.type = "application/octet-stream"
                                    href = newSrc
                                }
                            })
                        })
                        tmpType = ""
                    } else when (line[0]) {
                        'n' -> tmpName = line.substring(2)
                        't' -> tmpType = line.substring(2)
                        'a' -> tmpAuthor = line.substring(2)
                        'd' -> tmpDir = line.substring(2)
                    }
                }
            }
        }
    }
    http.send();
}