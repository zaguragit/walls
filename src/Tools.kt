
import org.w3c.dom.Document

inline fun Document.getById(string: String) = this.getElementById(string)