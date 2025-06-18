<script>
  const { modalId, modalContent, onClose } = $props();
</script>

<div class="modal modal-lg fade" id={modalId} tabindex="-1" aria-label="modal-window" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" aria-label="close" onclick={onClose}></button>
      </div>
      <div class="modal-body">
        {@render modalContent()}
      </div>
    </div>
  </div>
</div>

<style>
    .modal-content {
        resize: vertical;
        width: 70vw;
    }
</style>
