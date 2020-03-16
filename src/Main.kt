import org.w3c.dom.Element
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.Image
import org.w3c.xhr.XMLHttpRequest
import kotlin.browser.document
import kotlin.dom.addClass
import kotlin.js.Json

lateinit var scroll: HTMLDivElement
lateinit var popup: HTMLDivElement
lateinit var popupWall: Image
lateinit var popupWallName: Element
lateinit var popupWallAuthor: Element

fun main() {
    val http = XMLHttpRequest()
    http.open("GET", "http://raw.githubusercontent.com/leoxshn/walls/master/index", true)
    http.onreadystatechange = {
        if (http.readyState == 4.toShort()) {
            if (http.status == 200.toShort() || http.status == 0.toShort()) {
                start(http.responseText)
            }
        }
    }
    http.send();
    scroll = document.getById("scroll")!! as HTMLDivElement
    popup = document.getById("popup")!! as HTMLDivElement
    popupWall = document.getById("wall")!! as Image
    popupWallName = document.getById("name")!!
    popupWallAuthor = document.getById("author")!!
}

fun start(string: String) {
    println(string)
    var tmpName = ""
    var tmpAuthor = ""
    var tmpDir = ""
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
                addEventListener("click", {
                    popup.style.display = "block"
                    val newSrc = "./img/$dir/img.png"
                    if (popupWall.src != newSrc) {
                        popupWall.src = ""
                        popupWall.src = "./img/$dir/thumb.jpg"
                        popupWall.src = newSrc
                    }
                    popupWallName.textContent = name
                    popupWallAuthor.textContent = author
                })
            })
        } else when (line[0]) {
            'n' -> tmpName = line.substring(2)
            'a' -> tmpAuthor = line.substring(2)
            'd' -> tmpDir = line.substring(2)
        }
    }
}