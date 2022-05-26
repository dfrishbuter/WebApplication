//import component.fcContainerGroup
import component.fcContainerGroupList
import component.fcContainerSubjectList
//import component.fcContainerStudent
import component.fcContainerTeacherList
import component.fcContainerWorkPlanList
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
                        attrs.path = Config.workPlansByTeacherCommonPath
                        attrs.element =
                            createElement(fcContainerWorkPlanList("/by_teacher"))
                    }
                    Route {
                        attrs.path = Config.workPlansByGroupCommonPath
                        attrs.element =
                            createElement(fcContainerWorkPlanList("/by_group"))
                    }
                    Route {
                        attrs.path = Config.workPlansBySubjectCommonPath
                        attrs.element =
                            createElement(fcContainerWorkPlanList("/by_subject"))
                    }
                }
                child(cReactQueryDevtools()) {} // работает только в отладочной версии
            }
        }
    }
}

