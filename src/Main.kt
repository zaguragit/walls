import org.w3c.dom.Element
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.Image
import org.w3c.xhr.XMLHttpRequest
import kotlin.browser.document
import kotlin.dom.addClass
import kotlin.js.Json

const val repoUrl = "http://raw.githubusercontent.com/leoxshn/walls/master"

lateinit var scroll: HTMLDivElement
lateinit var popup: HTMLDivElement

fun main() {
    val http = XMLHttpRequest()
    http.open("GET", "$repoUrl/index.json", true)
    http.onreadystatechange = {
        if (http.readyState == 4.toShort())
            start(http.responseText)
    }
    scroll = document.getElementById("scroll")!! as HTMLDivElement
    popup = document.getElementById("popup")!! as HTMLDivElement
    http.send();
}

fun start(string: String) {
    val popupWall = document.getElementById("wall")!! as Image
    val popupWallName = document.getElementById("name")!!
    val popupWallAuthor = document.getElementById("author")!!
    JSON.parse<Json>(string) { _, obj ->
        if (jsTypeOf(obj) == "object" && (obj as Json)["d"] != null) {
            scroll.appendChild(document.createElement("div").apply {
                addClass("card")
                appendChild(Image().apply { src = repoUrl + "/" + obj["d"].toString() + "/thumb.jpg" })
                appendChild(document.createElement("p").apply {
                    textContent = obj["n"].toString()
                })
                addEventListener("click", {
                    popup.style.display = "block"
                    val newSrc = repoUrl + "/" + obj["d"].toString() + "/img.png"
                    if (popupWall.src != newSrc) {
                        popupWall.src = ""
                        popupWall.src = repoUrl + "/" + obj["d"].toString() + "/thumb.jpg"
                        popupWall.src = newSrc
                    }
                    popupWallName.textContent = obj["n"].toString()
                    popupWallAuthor.textContent = obj["a"].toString()
                })
            })
        }
        obj
    }
}