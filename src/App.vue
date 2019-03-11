<template lang="pug">
v-app
  v-navigation-drawer(
    v-if="!isMobile"
    :mobile-break-point="mobileChangeSize"
    permanent
    clipped
    fixed
    app
  )
    v-list(dense two-line)
      v-list-tile(:to="item.to" v-for="item in sideMenuList" :key="item.name")
        v-list-tile-action
          v-icon {{item.icon}}
        v-list-tile-content
          v-list-tile-title {{item.name}}
          
  v-toolbar(
    color="primary"
    clipped-left
    fixed
    flat
    app
  )
    //- v-toolbar-side-icon(@click.stop='drawer = !drawer' v-if="!isMobile")
    v-toolbar-title Application
  
  v-content
    router-view
  
  v-footer.pa-3(v-if="!isMobile")
    v-spacer
    div © {{ new Date().getFullYear() }}
  
  v-bottom-nav(
    v-if="isMobile"
    :active.sync='bottomNav'
    :value="true"
    color="transparent"
    shift
  )
    v-btn(
      v-for="item in fetchBottomBtn"
      :key="item.name"
      color="teal"
      flat 
      :value="item.name"
      :to="item.to"
    )
      span {{item.name}}
      v-icon {{item.icon}}
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      bottomNav: "recent",
      drawer: true,
      mobileChangeSize: this.$vuetify.sm,
      sideMenuList: [
        {
          to: "/",
          icon: "home",
          name: "ホーム"
        },
        {
          to: "/task",
          icon: "assignment_turned_in",
          name: "タスク一覧"
        },
        {
          to: "calender",
          icon: "calendar_today",
          name: "カレンダー"
        },
        {
          to: "/setting",
          icon: "settings",
          name: "設定"
        },
        {
          to: "/infomation",
          icon: "info",
          name: "お知らせ"
        }
      ],
      bottomBtnList: {
        home: [
          {
            to: "/",
            icon: "home",
            name: "ホーム"
          },
          {
            to: "/task",
            icon: "check_circle",
            name: "タスク"
          },
          {
            to: "/setting",
            icon: "settings",
            name: "設定"
          },
          {
            to: "/infomation",
            icon: "info",
            name: "お知らせ"
          }
        ]
      }
    };
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    },
    fetchSideMenu() {
      const nowRoute = this.$router.history.current.name;
      return this.sideMenuList.home;
    },
    fetchBottomBtn() {
      const nowRoute = this.$router.history.current.name;
      return this.bottomBtnList.home;
    }
  }
};
</script>