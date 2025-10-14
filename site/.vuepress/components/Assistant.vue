<template>
  <div class="assistant-container">
    <button 
      v-if="!isOpen" 
      class="assistant-toggle-btn"
      @click="toggleAssistant"
      aria-label="Open Assistant"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
    </button>
    
    <div v-if="isOpen" class="assistant-window">
      <div class="assistant-header">
        <span class="assistant-title">Support Assistant</span>
        <button 
          class="assistant-close-btn"
          @click="toggleAssistant"
          aria-label="Close Assistant"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      <iframe
        :src="assistantUrl"
        class="assistant-iframe"
        frameborder="0"
        allow="clipboard-write"
        title="Support Assistant"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "Assistant",
  data() {
    return {
      isOpen: false,
      assistantUrl: "https://reports.zumasyslabs.com/assistants/admin%3Asupport-assistant/chat?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJhZDIzYzJmMS04NDM5LTRhODEtYTk1Ni0zOTljODFmNjgzODgiLCJpYXQiOjE3NTk5NDkxNjguNDEzfQ.nz1Qo0_3A9FcsNT8OdORfC0PnPhb5m06D3GqES80Kqg"
    };
  },
  methods: {
    toggleAssistant() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style scoped>
.assistant-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
}

.assistant-toggle-btn {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #eb6b3b;
  color: white;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.assistant-toggle-btn:hover {
  background-color: #d35a2a;
  transform: scale(1.05);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.assistant-toggle-btn:active {
  transform: scale(0.95);
}

.assistant-window {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 400px;
  height: 600px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.assistant-header {
  background-color: #eb6b3b;
  color: white;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.assistant-title {
  font-weight: 600;
  font-size: 16px;
}

.assistant-close-btn {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: background-color 0.2s ease;
}

.assistant-close-btn:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.assistant-iframe {
  flex: 1;
  width: 100%;
  border: none;
  background: white;
}

/* Mobile responsive */
@media (max-width: 768px) {
  .assistant-window {
    width: calc(100vw - 40px);
    height: calc(100vh - 100px);
    bottom: 10px;
    right: 10px;
  }
  
  .assistant-toggle-btn {
    width: 56px;
    height: 56px;
  }
}
</style>