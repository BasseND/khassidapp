<template>
    <v-form>
        <v-container mt-4>
            <v-layout row wrap>
                <v-flex xs12 sm6 offset-sm3>
                    <v-text-field label="Titre" name="title" v-model="title" outline></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 offset-sm3>
                    <v-text-field label="Khassida Url" name="khassidaUrl" v-model="khassidaUrl" outline></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 offset-sm3>
                    <v-select :items="autors" name="author" v-model="author" label="Auteur" outline></v-select>
                </v-flex>
                <v-flex xs12 sm6 offset-sm3>
                    <v-select :items="categories" name="categorie" v-model="categorie" label="Catégorie" outline></v-select>
                </v-flex>
                <v-flex xs12 sm6 offset-sm3>
                    <v-textarea label="Description" name="description" v-model="description" outline></v-textarea>
                </v-flex>

                <v-flex xs12 sm6 offset-sm3 text-xs-center text-sm-center>
                    <v-btn color="red" dark large>Annuler</v-btn>
                    <v-btn color="green" dark large>Save</v-btn>
                </v-flex>

            </v-layout>
        </v-container>
    </v-form>
</template>

<script>
export default {
  data: () => ({
    title: "Mouwahibou 2018",
    khassidaUrl: "",
    author: "",
    categorie: "",
    description: "",
    autors: ["Cheikhoul Khadim"],
    categories: ["Khassida"]
  })
};
</script>