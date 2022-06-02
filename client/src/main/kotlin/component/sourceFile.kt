package component

import kotlinext.js.jso
import kotlinx.html.INPUT
import kotlinx.html.js.onClickFunction
import kotlinx.serialization.encodeToString
import react.Props
import react.dom.*
import react.fc
import react.query.useMutation
import react.query.useQueryClient
import react.useRef
import ru.altmanea.edu.server.model.Config
import wrappers.axios
import kotlin.js.json
import kotlinx.serialization.json.Json
import react.router.dom.Link

external interface SourceFileProps : Props {
    var fileURL: String
    var loadFileContents: (String) -> Unit
}

fun fcSourceFile() = fc("SourceFile") { props: SourceFileProps ->
    val urlRef = useRef<INPUT>()

    span {
        p {
            + "Source file URL: "
            input {
                ref = urlRef
            }
        }
        button {
            + "Import"
            attrs.onClickFunction = {
                urlRef.current?.value?.let { url ->
                    props.loadFileContents(url)
                }
            }
        }
    }
}

fun fcContainerSourceFile() = fc("QuerySourceFile") { _: Props ->
    // запрос на добавление пути к импортируемому файлу
    val addUrlMutation = useMutation<Any, Any, String, Any>(
        { fileUrl: String ->
            axios<String>(jso {
                url = Config.importPath // Куда делаем запрос (чтобы передать туда полученный путь к файлу)
                method = "Post"         // Какой метод
                headers = json(
                    "Content-Type" to "application/json"  // В каком виде передаем контент
                )
                data = Json.encodeToString(fileUrl) // Упаковываем наш путь к файлу в формат json (совпадает с Content-Type)
            })
        }
    )

    child(fcSourceFile()) {
        attrs.loadFileContents = {
            addUrlMutation.mutate(it, null)
        }
    }

    if (addUrlMutation.isLoading) div { + "Loading .." }
    else if (addUrlMutation.isError) div { + "${addUrlMutation.error}" }
    else if (addUrlMutation.isSuccess) {
        div {
            Link {
                attrs.to = "/teachers"
                + "Teachers"
            }
        }
        div {
            Link {
                attrs.to = "/groups"
                + "Groups"
            }
        }
        div {
            Link {
                attrs.to = "/subjects"
                + "Subjects"
            }
        }
    }
}