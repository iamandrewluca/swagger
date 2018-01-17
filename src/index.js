import SwaggerUI from 'swagger-ui'
import 'swagger-ui/dist/swagger-ui.css'

SwaggerUI({
    url: "http://petstore.swagger.io/v2/swagger.json",
    dom_id: '#root',
})