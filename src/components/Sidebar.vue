<template>
    <aside class="sidebar">
        <div class="logo">
            <router-link to="/">
                <Logo></Logo>
            </router-link>
        </div>
        <nav class="nav">
            <ul class="nav__list">
                <li class="nav__item">
                    <router-link  :to="{name: 'dashboard'}" class="nav__link">
                        <svg class="icon icon--dashboard" width="20" height="18">
                            <use xlink:href="#icon-dashboard"></use>
                        </svg>
                        Dashboard
                    </router-link>
                </li>
                <li class="nav__item">
                    <router-link :to="{name: 'spelling'}" class="nav__link">
                        <svg class="icon icon--spelling" width="20" height="18">
                            <use xlink:href="#icon-spelling"></use>
                        </svg>
                        Spelling
                    </router-link>
                </li>
                <li class="nav__item">
                    <router-link :to="{name: 'vocabulary'}" class="nav__link">
                        <svg class="icon icon--vocabulary" width="20" height="18">
                            <use xlink:href="#icon-vocabulary"></use>
                        </svg>
                        Vocabulary
                    </router-link>
                </li>
                <li class="nav__item">
                    <router-link :to="{name: 'shop'}" class="nav__link">
                        <svg class="icon icon--shop" width="20" height="18">
                            <use xlink:href="#icon-shop"></use>
                        </svg>
                        Shop
                    </router-link>
                </li>
                <li class="nav__item">
                    <router-link :to="{name: 'settings'}" class="nav__link">
                        <svg class="icon icon--settings" width="20" height="18">
                            <use xlink:href="#icon-settings"></use>
                        </svg>
                        Settings
                    </router-link>
                </li>
                <li class="nav__item">
                    <router-link to="/logout" class="nav__link">
                        <svg class="icon icon--logout" width="20" height="18">
                            <use xlink:href="#icon-logout"></use>
                        </svg>
                        Logout
                    </router-link>
                </li>
            </ul>
        </nav>
    </aside>
</template>
<script>
    import Logo from '@/components/Logo'
    export default {
        name: "Sidebar",
        components: {
            Logo
        }
    }
</script>

<style lang="scss">
    .logo {
        padding-bottom: 2rem;
    }
    .icon {
        width: 1.5rem;
        height: 1.5rem;
        margin-right: 0.57rem;
    }
</style>