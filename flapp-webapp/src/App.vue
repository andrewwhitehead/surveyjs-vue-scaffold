<template>
  <div class="app-outer fill-body" id="app">
    <Navbar />
    <main class="app-content">
      <SurveySidebarComponent />
      <SurveyComponent />
      <!--SurveyCreatorComponent /-->
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import SurveySidebarComponent from "./components/SurveySidebarComponent.vue";
import SurveyComponent from "./components/SurveyComponent.vue";
import SurveyCreatorComponent from "./components/SurveyCreatorComponent.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Navbar,
    Footer,
    SurveySidebarComponent,
    SurveyComponent
    //SurveyCreatorComponent
  }
};
</script>

<style lang="scss">
.app-main {
  flex: auto;
  padding: 0 15px 80px;
}

.app-outer {
  display: flex;
  flex-flow: column nowrap;
  min-height: 100%;
}

.app-content {
  display: flex;
  flex: 1 0 auto;
  flex-flow: row nowrap;
  max-width: 100%;
  padding-top: 0;
  padding-bottom: 0;
}

.app-main {
  flex: auto;
  padding: 0 15px 80px;
}

.sidebar-left,
.sidebar-right {
  display: block;
  flex: none;
  overflow: hidden;
  position: relative;
  transition: width 0.2s ease-in;
  width: $sidebar-width-md;
  &.insert-hidden {
    width: 0;
  }
}
@include media-breakpoint-up(lg) {
  .sidebar-left,
  .sidebar-right {
    width: $sidebar-width-lg;
  }
}

// Header styles

.navbar-tag {
  border: 1px solid #fff;
  border-radius: 2px;
  display: inline-block;
  font-size: 60%;
  line-height: 1;
  margin-left: 0.5em;
  padding: 0.25em 0.5em;
  vertical-align: text-bottom;
}

.app-exit + .navbar {
  padding-right: 170px;
}

.navbar-brand:not(.logo) {
  flex: 1 1 auto;
}

.navbar .navbar-extra {
  display: inline-block;
  flex: 1 1 auto;
  text-align: right;
}

.app-exit,
.navbar {
  .btn-primary {
    border-color: #ccc;
  }
}

@include media-breakpoint-down(md) {
  .navbar .navbar-text {
    font-size: 1em;
  }
  .navbar .navbar-extra {
    flex: 0 1 auto;
  }
}

#app-exit {
  padding: 8px 15px;
  position: absolute;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 100;
  .btn {
    border-radius: 10rem;
    font-size: 110%;
    padding: 0.5em 1em;
  }
}
</style>
