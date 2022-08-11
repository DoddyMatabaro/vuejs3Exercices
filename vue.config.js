// import { defineConfig } from '@vue/cli-service'
// export default defineConfig({
//   transpileDependencies: true,
//   css:{
//       loaderOptions:{
//           sass:{
//               additionalData: '@import "@/styles/base.scss";'
//           }
//       }
//     }
// })
 
module.exports = {
    css:{
        loaderOptions:{
            sass:{
              additionalData: '@import "@/styles/base.scss";'
            }
        }
    }
 }