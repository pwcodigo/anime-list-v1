export default{
    name: "Recentes",
    data(){
        return {
            listAnime: ""
        }
    }, 
    created(){
        this.puxarApiAnimes()
    },
    methods:{
        puxarApiAnimes(){
            fetch(`./api/animes.json`)
            .then( r => r.json())
            .then( r =>{
                this.listAnime = r;
            })
            
        }
    },
    template: `
    <section>
        <div class="row mb-2">
            <div class="col-md-6" v-for="(itemAnime,index) in listAnime" :key="index">
                <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-m-250 position-relative">
                    <div class="col p-4 d-flex flex-column position-static">
                        <strong class="d-inline-block mb-1 text-primary">{{itemAnime.name}}</strong>
                        <h6 class="mb-0">{{itemAnime.genere.toString()}}</h6>
                        <div class="mb-1 text-muted">{{itemAnime.ano}}</div>
                        <p class="card-text mb-auto">{{itemAnime.descricao.substring(0,55)}}...</p>
                        <a href="#" class="stretched-link">Leia mais</a>
                    </div>
                    <div class="col-auto d-none d-lg-block">
                    <img :src="itemAnime.img" class="bd-placeholder-img" width="200" height="250" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail">
                    </div>
                    
                </div>
            </div>
            
        </div>

    </section>
    `,
}