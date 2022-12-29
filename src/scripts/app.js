const tagMain = document.querySelector("main")

class Api {

    static async getNews() {

        let api = await fetch("https://kenzie-news-api.herokuapp.com/api/news")
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => err)

        return api

    }

    static async criarCard() {

        let news = await this.getNews()

        news.forEach(elem => {

            let tagArticle = document.createElement("article")
            let tagDiv = document.createElement("div")
            let tagImg = this.criarImg(elem.imagem)
            let tagSpan = this.criarSpan(elem.categoria)
            let tagA = this.criarH2(elem.noticia_completa, elem.titulo)
            let tagP = this.criarP(elem.resumo)
            let tagSpan2 = this.criarSpan2(elem.fonte)

            tagSpan.classList.add("categoria")
            tagSpan2.classList.add("fonte")

            tagMain.append(tagArticle)
            tagArticle.append(tagImg, tagDiv)
            tagDiv.append(tagSpan, tagA, tagP, tagSpan2)

        });

    }

    static criarImg(img) {

        const tagImg = document.createElement("img")
        tagImg.src = img
        tagImg.alt = img

        return tagImg

    }

    static criarSpan(span) {

        const tagSpan = document.createElement("span")
        tagSpan.innerText = span

        return tagSpan

    }

    static criarH2(link, texto) {

        const tagA = document.createElement("a")
        tagA.href = link
        tagA.innerText = texto

        return tagA

    }

    static criarP(p) {

        const tagP = document.createElement("p")
        tagP.innerText = p

        return tagP

    }

    static criarSpan2(span2) {

        const tagSpan2 = document.createElement("span")
        tagSpan2.innerText = `Fonte: ${span2}`

        return tagSpan2

    }

}



Api.criarCard()