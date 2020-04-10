import org.w3c.dom.*
import org.w3c.xhr.XMLHttpRequest
import kotlin.browser.document
import kotlin.dom.addClass

lateinit var scroll: HTMLDivElement
lateinit var popup: HTMLDivElement
lateinit var popupWall: Image
lateinit var popupWallName: Element
lateinit var popupWallDownload: HTMLAnchorElement
lateinit var popupWallAuthor: Element
lateinit var title: HTMLElement
lateinit var topBar: HTMLSpanElement
lateinit var copyright: HTMLElement

const val blurFilter = "blur(15px)"

fun main() {
    val http = XMLHttpRequest()
    http.open("GET", "https://leoxshn.github.io/walls/index", true)
    http.onreadystatechange = {
        if (http.readyState == 4.toShort())
            if (http.status == 200.toShort() || http.status == 0.toShort())
                start(http.responseText)
    }
    http.send();
    scroll = getById("scroll")!! as HTMLDivElement
    popup = getById("popup")!! as HTMLDivElement
    popupWall = getById("wall")!! as Image
    popupWallName = getById("name")!!
    popupWallDownload = getById("download")!! as HTMLAnchorElement
    popupWallAuthor = getById("author")!!
    title = getById("title")!! as HTMLElement
    topBar = getById("topBar")!! as HTMLSpanElement
    copyright = getById("copyright")!! as HTMLElement
}

fun start(string: String) {
    println(string)
    var tmpName = ""
    var tmpAuthor = ""
    var tmpDir = ""
    var tmpType = ""
    for (line in string.lines()) {
        if (line.isEmpty()) {
            scroll.appendChild(document.createElement("div").apply {
                addClass("card")
                appendChild(Image().apply { src = "./img/$tmpDir/thumb.jpg" })
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
        } else when (line[0]) {
            'n' -> tmpName = line.substring(2)
            't' -> tmpType = line.substring(2)
            'a' -> tmpAuthor = line.substring(2)
            'd' -> tmpDir = line.substring(2)
        }
    }
}