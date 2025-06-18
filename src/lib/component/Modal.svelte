<script>
  const { modalContent, onClose } = $props();
</script>


<div class="modal-overlay">
  <div class="modal-wrapper">
    <div class="float-end">
      <button class="btn btn-secondary" onclick={onClose}>
        &times;
      </button>
    </div>
    <div class="modal-content">
      {@render modalContent()}
    </div>
  </div>
</div>

<style>
    .modal-overlay {
        background: rgba(0, 0, 0, 0.7);
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }

    .modal-wrapper {
        resize: vertical;
        overflow: auto;
        width: 70vw;
        max-height: 80vh;
        background: ghostwhite;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 20px;
        padding: 20px;
    }

    .modal-content {
        margin: 20px auto;
        width: 100%;
    }
</style>
