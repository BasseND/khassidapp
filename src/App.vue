<template>
  <v-app>
    <v-navigation-drawer temporary fixed v-model="drawer" enable-resize-watcher app>

      <v-list>
        <v-list-tile value="true" v-for="(routeLink, i) in routeLinks" :key="i" :to="routeLink.path">
          <v-list-tile-action>
            <v-icon v-html="routeLink.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{routeLink.title}}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

    </v-navigation-drawer>
    <v-toolbar color="light-blue" dark app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>

      <v-toolbar-title>{{title}}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>

      <v-btn icon to="/">
        <v-icon>view_list</v-icon>
      </v-btn>
      <v-btn icon to="/grid">
        <v-icon>view_module</v-icon>
      </v-btn>

    </v-toolbar>

    <v-content>

      <router-view> </router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      title: "",
      drawer: true,
      fixed: false,
      routeLinks: [
        {
          title: "Home",
          path: "/",
          icon: "work"
        },
        {
          title: "Grid Display",
          path: "/grid",
          icon: "work"
        },
        {
          title: "Ajouter Khassida",
          path: "/add",
          icon: "work"
        },

        {
          title: "Noter l'appli",
          path: "/about",
          icon: "work"
        },
        {
          title: "A propos",
          path: "/about",
          icon: "work"
        }
      ]
      //
    };
  },

  created() {
    console.log(this.$route.path);

    var title = this.$route.path;
    switch (title) {
      case "/add":
        this.title = "Ajouter Khassida";
        break;
      case "/about":
        this.title = "A propos";
        break;
      case "/":
        this.title = "App Khassida";
        break;
      default:
        this.title = "App Khassida";
    }
  }
};
</script>
