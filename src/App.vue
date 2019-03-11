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
    v-toolbar-title タスク完了するところ見てて・・・
  
  v-content
    router-view
  
  v-card(height="32" v-if="!isMobile")
  v-footer.pa-3(
    v-if="!isMobile"
    height="32"
    fixed
  )
    v-spacer
    div © {{ new Date().getFullYear() }}
  
  v-card(height="56" v-if="isMobile")
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
import TaskListView from '@/components/Organisms/TaskListView'
export default {
  name: 'app',
  components:{
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
      },
      taskList: [
        {
          uid: this.generateUID(),
          status: 0,
          display: 'はじめのたすく'
        }, {
          uid: this.generateUID(),
          status: 1,
          display: '少し進んだたすく'
        }, {
          uid: this.generateUID(),
          status: 2,
          display: '終わったたすく'
        }, {
          uid: this.generateUID(),
          status: 0,
          display: 'ネストされたたすく',
          child: {
            uid: this.generateUID(),
            status: 0,
            display: 'ネストされたたすく',
          }
        }
      ]
    };
  },
  computed: {
    isMobile () {
      return this.$vuetify.breakpoint.smAndDown;
    },
    fetchSideMenu () {
      const nowRoute = this.$router.history.current.name;
      return this.sideMenuList.home;
    },
    fetchBottomBtn () {
      const nowRoute = this.$router.history.current.name;
      return this.bottomBtnList.home;
    }
  },
  methods: {
    generateUID () {
      const uniqueDateString = new Date().getTime().toString(16)
      const randomString = Math.floor(1000*Math.random()).toString(16)
      return  uniqueDateString + randomString
    }
  }
};
</script>