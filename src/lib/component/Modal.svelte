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

<!--<div class="modal fade" id={modalId}>-->
<!--  <div class="modal-dialog">-->
<!--    <div class="modal-content">-->
<!--      hjhj-->
<!--&lt;!&ndash;      <div class="modal-header">&ndash;&gt;-->
<!--&lt;!&ndash;        <h1>Header</h1>&ndash;&gt;-->
<!--&lt;!&ndash;        <button class="btn-close" data-bs-dismiss={modalId} aria-label="close-modal"></button>&ndash;&gt;-->
<!--&lt;!&ndash;      </div>&ndash;&gt;-->
<!--&lt;!&ndash;      <div class="modal-body">&ndash;&gt;-->
<!--&lt;!&ndash;        {@render modalContent()}&ndash;&gt;-->
<!--&lt;!&ndash;      </div>&ndash;&gt;-->
<!--    </div>-->
<!--  </div>-->
<!--</div>-->

<!--<div class="modal-overlay">-->
<!--  <div class="modal-wrapper">-->
<!--    <div class="float-end">-->
<!--      <button class="btn btn-secondary" onclick={onClose}>-->
<!--        &times;-->
<!--      </button>-->
<!--    </div>-->
<!--    <div class="modal-content">-->
<!--      {@render modalContent()}-->
<!--    </div>-->
<!--  </div>-->
<!--</div>-->

<style>
    /*.modal-overlay {*/
    /*    background: rgba(0, 0, 0, 0.7);*/
    /*    width: 100%;*/
    /*    height: 100%;*/
    /*    position: fixed;*/
    /*    top: 0;*/
    /*    bottom: 0;*/
    /*    left: 0;*/
    /*    right: 0;*/
    /*}*/

    /*.modal-wrapper {*/
    /*    resize: vertical;*/
    /*    overflow: auto;*/
    /*    width: 70vw;*/
    /*    max-height: 80vh;*/
    /*    background: ghostwhite;*/
    /*    position: fixed;*/
    /*    top: 50%;*/
    /*    left: 50%;*/
    /*    transform: translate(-50%, -50%);*/
    /*    border-radius: 20px;*/
    /*    padding: 20px;*/
    /*}*/

    /*.modal-content {*/
    /*    margin: 20px auto;*/
    /*    width: 100%;*/
    /*}*/

    .modal-content {
        resize: vertical;
        width: 70vw;
        /*min-height: fit-content;*/
        /*max-height: 80vh;*/
    }
</style>
