<template>
    <v-layout>
        <v-flex xs12 sm12 offset-sm1>
            <v-container grid-list-sm fluid>

                <v-layout row wrap mt-5>
                    <v-flex xs12 sm2 mr-3 mb-3 v-for="item in items2" :key="item.title">
                        <v-card>
                            <v-img :src="item.khassidaThumb" height="160px">
                                <v-container fill-height fluid pa-2>
                                    <v-layout fill-height>
                                        <v-flex xs12 align-end flexbox>
                                            <span class="headline white--text" v-text="item.arabicTitle"></span>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                            </v-img>

                            <v-card-actions>
                                <h2>{{ item.title }}</h2>
                            </v-card-actions>
                        </v-card>

                    </v-flex>
                </v-layout>

            </v-container>
        </v-flex>
    </v-layout>
</template>


<script>
export default {
  data() {
    return {
      items2: [
        {
          id: "53431",
          author: "library_books",
          categories: "khassida",
          title: "Mouwahibou",
          arabicTitle: "قصة حبي أو",
          khassidaPdfUrl: "http://www.daaraykamil.com/Asma-ul-Husna-ar.pdf",
          khassidaThumb:
            "https://www.muslimette-magazine.com/wp-content/uploads/2016/05/ramadan-900x556.jpg",
          khassidaFirstLetter: "A" // mettre un regex
        },
        {
          id: "53432",
          author: "library_books",
          categories: "khassida",
          title: "Moukhadimatt",
          arabicTitle: "قصة حبي أو",
          khassidaPdfUrl: "http://www.daaraykamil.com/Asma-ul-Husna-ar.pdf",
          khassidaThumb:
            "https://adminassets.devops.arabiaweather.com/sites/default/files/field/image/%D8%B1%D9%85%D8%B6%D8%A7%D9%86_3.jpg",
          khassidaFirstLetter: "A" // mettre un regex
        },
        {
          id: "53433",
          author: "library_books",
          categories: "khassida",
          title: "Azirou",
          arabicTitle: "قصة حبي أو",
          khassidaPdfUrl: "http://www.daaraykamil.com/Asma-ul-Husna-ar.pdf",
          khassidaThumb:
            "https://www.muslimette-magazine.com/wp-content/uploads/2016/05/ramadan-900x556.jpg",
          khassidaFirstLetter: "A" // mettre un regex
        },
        {
          id: "53434",
          author: "library_books",
          categories: "khassida",
          title: "Asma ul Husna",
          arabicTitle: "قصة حبي أو",
          khassidaPdfUrl: "http://www.daaraykamil.com/Asma-ul-Husna-ar.pdf",
          khassidaThumb:
            "https://adminassets.devops.arabiaweather.com/sites/default/files/field/image/%D8%B1%D9%85%D8%B6%D8%A7%D9%86_3.jpg",

          khassidaFirstLetter: "A" // mettre un regex
        },
        {
          id: "53435",
          author: "library_books",
          categories: "khassida",
          title: "Halamman ",
          arabicTitle: "قصة حبي أو",
          khassidaPdfUrl: "http://www.daaraykamil.com/Asma-ul-Husna-ar.pdf",
          khassidaThumb:
            "https://www.muslimette-magazine.com/wp-content/uploads/2016/05/ramadan-900x556.jpg",
          khassidaFirstLetter: "A" // mettre un regex
        },
        {
          id: "53436",
          author: "library_books",
          categories: "khassida",
          title: "Mouwahibou",
          arabicTitle: "قصة حبي أو",
          khassidaPdfUrl: "http://www.daaraykamil.com/Asma-ul-Husna-ar.pdf",
          khassidaThumb:
            "https://www.muslimette-magazine.com/wp-content/uploads/2016/05/ramadan-900x556.jpg",
          khassidaFirstLetter: "A" // mettre un regex
        },
        {
          id: "53437",
          author: "library_books",
          categories: "khassida",
          title: "Moukhadimatt",
          arabicTitle: "قصة حبي أو",
          khassidaPdfUrl: "http://www.daaraykamil.com/Asma-ul-Husna-ar.pdf",
          khassidaThumb:
            "https://adminassets.devops.arabiaweather.com/sites/default/files/field/image/%D8%B1%D9%85%D8%B6%D8%A7%D9%86_3.jpg",
          khassidaFirstLetter: "A" // mettre un regex
        },
        {
          id: "53438",
          author: "library_books",
          categories: "khassida",
          title: "Azirou",
          arabicTitle: "قصة حبي أو",
          khassidaPdfUrl: "http://www.daaraykamil.com/Asma-ul-Husna-ar.pdf",
          khassidaThumb:
            "https://www.muslimette-magazine.com/wp-content/uploads/2016/05/ramadan-900x556.jpg",
          khassidaFirstLetter: "A" // mettre un regex
        },
        {
          id: "53439",
          author: "library_books",
          categories: "khassida",
          title: "Asma ul Husna",
          arabicTitle: "قصة حبي أو",
          khassidaPdfUrl: "http://www.daaraykamil.com/Asma-ul-Husna-ar.pdf",
          khassidaThumb:
            "https://adminassets.devops.arabiaweather.com/sites/default/files/field/image/%D8%B1%D9%85%D8%B6%D8%A7%D9%86_3.jpg",

          khassidaFirstLetter: "A" // mettre un regex
        },
        {
          id: "53440",
          author: "library_books",
          categories: "khassida",
          title: "Halamman ",
          arabicTitle: "قصة حبي أو",
          khassidaPdfUrl: "http://www.daaraykamil.com/Asma-ul-Husna-ar.pdf",
          khassidaThumb:
            "https://www.muslimette-magazine.com/wp-content/uploads/2016/05/ramadan-900x556.jpg",
          khassidaFirstLetter: "A" // mettre un regex
        }
      ]
    };
  }
};
</script>