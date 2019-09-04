<template>
    <div class="tabs">
        <ul class="tabs__list">
            <li class="tabs__item"
                v-for="tab in tabs"
                :key="tab.title.toLowerCase().replace(/ /g, '-')"
                :class="{'is-active': tab.isActive}"
                @click="selectTab(tab)">

                <a href="javascript:;" class="tabs__link">{{ tab.title }}</a>
            </li>
        </ul>
        <div class="tabs__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Tabs",
        data() {
            return {
                tabs: []
            }
        },
        created() {
            this.tabs = this.$children;
        },
        methods: {
            selectTab(selectedTab) {
                this.tabs.forEach(tab => {
                    tab.isActive = (tab.title === selectedTab.title)
                })
            }
        }
    }
</script>