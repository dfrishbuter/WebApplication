//import component.fcContainerGroup
import component.*
//import component.fcContainerStudent
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
import ru.altmanea.edu.server.model.Config
import wrappers.cReactQueryDevtools

val queryClient = QueryClient()

fun main() {
    render(document.getElementById("root")!!) {
        HashRouter {
            QueryClientProvider {
                attrs.client = queryClient
                div {
                    child(fcContainerSourceFile())
                }
                Routes {
                    Route {
                        attrs.path = "/teachers"
                        attrs.element =
                            createElement(fcContainerTeacherList())
                    }
                    Route {
                        attrs.path = "/groups"
                        attrs.element =
                            createElement(fcContainerGroupList())
                    }
                    Route {
                        attrs.path = "/subjects"
                        attrs.element =
                            createElement(fcContainerSubjectList())
                    }
                    Route {
                        attrs.path = "/teachers/work_plans/by_teacher/:id"
                        attrs.element =
                            createElement(fcContainerWorkPlanList("/by_teacher"))
                    }
                    Route {
                        attrs.path = "/groups/work_plans/by_group/:id"
                        attrs.element =
                            createElement(fcContainerWorkPlanList("/by_group"))
                    }
                    Route {
                        attrs.path = "/subjects/work_plans/by_subject/:id"
                        attrs.element =
                            createElement(fcContainerWorkPlanList("/by_subject"))
                    }
                }
                child(cReactQueryDevtools()) {} // работает только в отладочной версии
            }
        }
    }
}

