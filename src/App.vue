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
    v-btn(
      v-if="backBtnIsShow"
      icon
      @click.stop="$router.go(-1)"
    )
      v-icon arrow_back
    v-toolbar-title タスク完了するところ見てて・・・
  
  v-content
    transition(:name="transitionName" mode="out-in")
      router-view
  
  v-card(height="32" v-if="!isMobile")
  v-footer.pa-3(
    v-if="!isMobile"
    height="32"
    fixed
  )
    v-spacer
    div © {{ new Date().getFullYear() }}
  
  v-bottom-nav(
    v-if="isMobile"
    :value="true"
    height="56"
    shift
    fixed
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
import TaskListView from "@/components/Organisms/TaskListView";
export default {
  name: "app",
  components: {
    TaskListView
  },
  data() {
    return {
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
    backBtnIsShow () {
      return this.isMobile && Object.keys(this.$route.params).length　> 0;
    },
    transitionName () {
      if (this.isMobile) {
        return 'slide'
      } else {
        return 'fade'
      }
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

<style scoped>
.slide-enter-active, .slide-leave-active {
  transition: all 1s;
}
.slide-enter {
  opacity: 0;
  transform: translateX(25%);
}
.slide-leave-to {
  opacity: 0;
  transform: translateX(-25%);
}
.fade-enter-active, .fade-leave-active {
  transition: all 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
