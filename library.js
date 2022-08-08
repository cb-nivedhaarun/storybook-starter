import images from "./svg.js";

document.addEventListener('DOMContentLoaded', function() {
    const symbols = /[\r\n%#()<>?[\\\]^`{|}]/g
    let externalQuotesValue = 'double'
    let imgelement = document.querySelectorAll('[class^="cb-storybook"]')
    let id;

    imgelement.forEach(getImageDetails);

    function getImageDetails(item){
        if(item){
            id = item.classList[0]
        }

        let image = id.split('__')
        let type = image[0].split('-')[2]
        let imageName = image[1].split('--')[0]
        let imageVariant = image[1].split('--')[1]

        let selectedImg = images.filter((item) => (item.name.toLowerCase() == imageName.toLowerCase() && item.variant.toLowerCase() == imageVariant.toLowerCase()))
        checkFormat(selectedImg[0], type)
    }

    function checkFormat(val, type) {
        const value =
            '<svg>' +
            val.svg
                .replace(/background-image:\s{0,}url\(/, ``)
                .replace(/["']{0,}data:image\/svg\+xml,/, ``)
                .replace(/["']\);{0,}$/, ``) +
            '</svg>'
        return getResults(value, val.width, val.height, type)
    }

    function getResults(value, width, height, type) {
        const namespaced = addNameSpace(value)
        const escaped = encodeSVG(namespaced)
        const resultImage = `data:image/svg+xml,${escaped}`
        const resultCss = `background-image: url("data:image/svg+xml,${escaped}"); width:${width}; height:${height}`

        if(type == 'img'){
            const img = document.createElement('img')
            document.getElementsByClassName(id)[0].appendChild(img)
            img.setAttribute(`src`, resultImage)
            img.setAttribute(`alt`, "Image")
            img.setAttribute(`width`, width)
            img.setAttribute(`height`, height)
        }

        else if(type == 'css'){
            const node = document.createElement('div')
            document.getElementsByClassName(id)[0].appendChild(node)
            node.setAttribute(`style`, resultCss)
        }

        return resultCss
    }

    // Namespace
    function addNameSpace(data) {
        if (data.indexOf(`http://www.w3.org/2000/svg`) < 0) {
            data = data.replace(/<svg/g, "<svg xmlns='http://www.w3.org/2000/svg'")
        }

        return data
    }

    // Encoding
    function encodeSVG(data) {
        // Use single quotes instead of double to avoid encoding.
        if (externalQuotesValue === `double`) {
            data = data.replace(/"/g, `'`)
        } else {
            data = data.replace(/'/g, `"`)
        }

        data = data.replace(/>\s{1,}</g, `><`)
        data = data.replace(/\s{2,}/g, ` `)

        // Using encodeURIComponent() as replacement function
        // allows to keep result code readable
        return data.replace(symbols, encodeURIComponent)
    }

 }, false);


