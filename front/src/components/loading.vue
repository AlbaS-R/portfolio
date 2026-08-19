<template>
    <div class="loading">
        <div class="idioma">
            <select v-model="selectorIdioma">
                <option value="Español">Español</option>
                <option value="English">English</option>
            </select>
        </div>
        <div v-if="!selector" class="gif-container">
            <div class="content-wrapper">
                <img src="/gif/loading.gif" alt="Loading..." />
                <span class="typewriter">{{ displayText }}<span class="cursor" ></span></span>
            </div>
        </div>
        <div v-if="selector">  
            <nav class="nav">
                <RouterLink to="/homeCorp" class="nav-link">
                    <span v-if="selectorIdioma === 'English'">{{ textEnglish[0] }}</span>
                    <span v-else>{{ textSpanish[0] }}</span>
                </RouterLink>
                <RouterLink to="/homeCreate" class="nav-link">
                    <span v-if="selectorIdioma === 'English'">{{ textEnglish[1] }}</span>
                    <span v-else>{{ textSpanish[1] }}</span>
                </RouterLink>
            </nav>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const selectorIdioma = ref('Español');
const displayText = ref('');
const textEnglish = ['Corporative', 'Creative'];
const textSpanish = ['Corporativo', 'Creativa'];
let currentIndex = 0;
let isDeleting = false;
let animationTimer = null;
const selector = ref(false);

const getLoadingText = () => selectorIdioma.value === 'English' ? 'Loading...' : 'Cargando...';

const resetAnimation = () => {
    clearTimeout(animationTimer);
    displayText.value = '';
    currentIndex = 0;
    isDeleting = false;
    typeAnimation();
};

const typeAnimation = () => {
    const text = getLoadingText();

    if (!isDeleting) {
        if (currentIndex < text.length) {
            displayText.value += text[currentIndex];
            currentIndex++;
            animationTimer = setTimeout(typeAnimation, 100);
        } else {
            isDeleting = true;
            animationTimer = setTimeout(typeAnimation, 500);
        }
    } else {
        if (currentIndex > 0) {
            displayText.value = text.substring(0, currentIndex - 1);
            currentIndex--;
            animationTimer = setTimeout(typeAnimation, 50);
        } else {
            isDeleting = false;
            animationTimer = setTimeout(typeAnimation, 300);
        }
    }
};

onMounted(() => {
    resetAnimation();

    setTimeout(() => {
        selector.value = true;
    }, 3000);
});

watch(selectorIdioma, () => {
    resetAnimation();
});
</script>
<style scoped>
@font-face {
  font-family: 'Pixel';
  src: url('public/fonts/Pix32.ttf');
}
.loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
}

.gif-container {
    z-index: 10000;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
}

.content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.gif-container img {
    width: 150px;
    height: 150px;
    object-fit: contain;
    animation: blink 1.5s ease-in-out infinite;
}

@keyframes blink {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.3;
    }
}

.typewriter {
    color: #333;
    font-family: 'Pixel';
    font-size: 16px;
    min-width: 120px;
    white-space: nowrap;
}

.cursor {
    display: inline-block;
    animation: blink-cursor 0.75s step-end infinite;
    color: #333;
}

@keyframes blink-cursor {
    from, to {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
}

.tenor-gif-embed {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.tenor-gif-embed a {
    display: none;
}
</style>
