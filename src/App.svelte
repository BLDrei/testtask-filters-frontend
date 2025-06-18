<script>
  import Modal from "./lib/component/Modal.svelte";
  import AddFilterForm from "./lib/filter/AddFilterForm.svelte";
  import {onMount} from "svelte";

  let modalMode = true;
  let addFilterFormOpened = false;

  function openForm() {
    if(!modalMode) addFilterFormOpened = true;
  }
  function closeForm() {
    if(!modalMode) addFilterFormOpened = false;
  }

  let modal;
  let openModal;
  let closeModal;

  onMount(() => {
    modal = new bootstrap.Modal('#add-filter-modal', {keyboard: false});
    openModal = () => modal.show();
    closeModal = () => modal.hide();
  });
</script>



<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Page 2</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Page 3</a>
        </li>
      </ul>
      <span class="navbar-text">
        Log in placeholder
      </span>
    </div>
  </div>
</nav>

<main class="container-sm overflow-auto">
  <h1>Filters</h1>

  {#if !addFilterFormOpened || modalMode}
    <div class="row justify-content-md-center">
      <div class="col-auto">
        <div class="form-check form-switch">
          <label class="form-check-label" for="flexSwitchCheckDefault">
            Open add filter form as modal window
            <input class="form-check-input" bind:checked={modalMode} type="checkbox" role="switch" id="flexSwitchCheckDefault">
          </label>
        </div>
      </div>
      <div class="col-auto">
        <button type="button" class="btn btn-primary" onclick={modalMode ? openModal : openForm}>
          Create new filter
        </button>
      </div>
    </div>
  {:else}
    <AddFilterForm afterFormSaved={closeForm} closeForm={closeForm}/>
  {/if}

  {#if modalMode}
    <Modal modalId="add-filter-modal" onClose={closeModal}>
      {#snippet modalContent()}
        <AddFilterForm afterFormSaved={closeModal} closeForm={closeModal}/>
      {/snippet}
    </Modal>
  {/if}
</main>

<footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
  <div class="col-md-4 d-flex align-items-center">
    <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
      <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
    </a>
    <span class="mb-3 mb-md-0 text-muted">© 2025 Andrei Solntsev Jr.</span>
  </div>
</footer>

<style>
    h1 {
        text-align: center;
        margin: 20px 10px;
    }

    main {
        height: 70vh;
    }
</style>
