//import component.fcContainerGroup
import component.fcContainerGroupList
//import component.fcContainerStudent
import component.fcContainerTeacherList
import kotlinx.browser.document
import react.createElement
import react.dom.div
import react.dom.render
import react.query.QueryClient
import react.query.QueryClientProvider
import react.router.Route
import react.router.Routes
import react.router.dom.HashRouter
import react.router.dom.Link
import wrappers.cReactQueryDevtools

val queryClient = QueryClient()

fun main() {
    render(document.getElementById("root")!!) {
        HashRouter {
            QueryClientProvider {
                attrs.client = queryClient
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
                Routes {
                    Route {
                        attrs.path = "/teachers"
                        attrs.element =
                            createElement(fcContainerTeacherList())
                    }
                    Route {
                        attrs.path = "/teachers/:id" // ":id" это параметр
                        attrs.element =
                            createElement(fcContainerTeacherList())
                    }
                    Route {
                        attrs.path = "/groups"
                        attrs.element =
                            createElement(fcContainerGroupList())
                    }
                    Route {
                        attrs.path = "/groups/:group" // ":group" это параметр
                        attrs.element =
                            createElement(fcContainerGroupList())
                    }
                }
                child(cReactQueryDevtools()) {} // работает только в отладочной версии
            }
        }
    }
}

