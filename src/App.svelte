<script>
  import Modal from "./lib/component/Modal.svelte";
  import AddFilterForm from "./lib/filter/AddFilterForm.svelte";

  let modalMode = true;
  let addFilterFormOpened = false;

  function openForm() {
    addFilterFormOpened = true;
  }
  function closeForm() {
    addFilterFormOpened = false;
  }
</script>



<nav class="container-sm">
  <h1>Filter app</h1>
  <span>Menu 1</span>
  |
  <span>Menu 2</span>
  |
  <span>Menu 3</span>
  |
  <span>Menu 4</span>
</nav>

<main class="container-sm overflow-auto">
  <h1>Modal Example</h1>

  {#if !addFilterFormOpened}

    <div class="open-modal-btn-wrapper">
      <div class="form-check form-switch">
        <label class="form-check-label" for="flexSwitchCheckDefault">
          <input class="form-check-input" bind:checked={modalMode} type="checkbox" role="switch" id="flexSwitchCheckDefault">
          Open add filter form as modal window
        </label>
      </div>
      <button class="btn btn-primary" onclick={openForm}>
        Create new filter
      </button>
    </div>
  {:else}
    {#if modalMode}
      <Modal onClose={closeForm}>
        {#snippet modalContent()}
          <AddFilterForm afterFormSaved={closeForm} closeForm={closeForm}/>
        {/snippet}
      </Modal>
    {:else}
      <div class="container">
        <AddFilterForm afterFormSaved={closeForm} closeForm={closeForm}/>
      </div>
    {/if}
  {/if}
</main>

<footer class="container-sm">
  <span>Filter test task</span>
</footer>


<style>
    .open-modal-btn-wrapper {
        display: flex;
        justify-content: center;
    }
</style>
