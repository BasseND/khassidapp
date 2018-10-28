<template>
    <v-layout row mt-5>
        <v-flex xs12 sm6 offset-sm3>
            <v-card>

                <v-list two-line subheader>

                    <v-subheader inset>Khassida List</v-subheader>

                    <v-list-tile v-for="item in items2" :key="item.title" avatar>
                        <v-list-tile-avatar>
                            <v-icon class="blue white--text">library_books</v-icon>
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                            <v-list-tile-sub-title>{{ item.arabicTitle }}</v-list-tile-sub-title>
                        </v-list-tile-content>

                        <v-list-tile-action>
                            <v-btn icon ripple>
                                <v-icon color="grey lighten-1">remove_red_eye</v-icon>
                            </v-btn>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list>
            </v-card>
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
          khassidaFirstLetter: "A" // mettre un regex
        },
        {
          id: "53432",
          author: "library_books",
          categories: "khassida",
          title: "Moukhadimatt",
          arabicTitle: "قصة حبي أو",
          khassidaPdfUrl: "http://www.daaraykamil.com/Asma-ul-Husna-ar.pdf",
          khassidaFirstLetter: "A" // mettre un regex
        },
        {
          id: "53433",
          author: "library_books",
          categories: "khassida",
          title: "Azirou",
          arabicTitle: "قصة حبي أو",
          khassidaPdfUrl: "http://www.daaraykamil.com/Asma-ul-Husna-ar.pdf",
          khassidaFirstLetter: "A" // mettre un regex
        },
        {
          id: "53434",
          author: "library_books",
          categories: "khassida",
          title: "Asma ul Husna",
          arabicTitle: "قصة حبي أو",
          khassidaPdfUrl: "http://www.daaraykamil.com/Asma-ul-Husna-ar.pdf",
          khassidaFirstLetter: "A" // mettre un regex
        },
        {
          id: "53435",
          author: "library_books",
          categories: "khassida",
          title: "Halamman ",
          arabicTitle: "قصة حبي أو",
          khassidaPdfUrl: "http://www.daaraykamil.com/Asma-ul-Husna-ar.pdf",
          khassidaFirstLetter: "A" // mettre un regex
        }
      ]
    };
  }
};
</script>