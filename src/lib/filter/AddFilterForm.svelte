<script>
  import FilterService from "../service/filter-service.js";
  import Field from "../component/Field.svelte";
  import TextInput from "../component/input/TextInput.svelte";
  import CriteriaRowDuplicate from "./CriteriaRowDuplicate.svelte";
  import Labels from "../Labels.js";

  const { afterFormSaved = () => {}, closeForm = () => {} } = $props();

  let formPropertiesPromise = FilterService.getInstance().fetchFormProperties();

  let formElem;
  let filterNameElem;
  let criteriasDuplicateElem;

  let wasFormValidationTriggered = $state(false);


  async function saveFilter() {
    if (!formElem.reportValidity()) {
      wasFormValidationTriggered = true;
      return;
    }

    const newFilter = {
      filterName: filterNameElem.getValue(),
      criterias: criteriasDuplicateElem.getValue(),
    };

    await FilterService.getInstance().saveFilter(newFilter);
    afterFormSaved();
  }
</script>

{#await formPropertiesPromise then formProperties}
  <form bind:this={formElem} class:was-validated={wasFormValidationTriggered} onsubmit={e => e.preventDefault()}>
    <Field label="Filter name" labelFor="filterName">
      {#snippet fieldContent()}
        <TextInput
            bind:this={filterNameElem}
            name="filterName"
            maxlength={formProperties.filterName.maxlength}
        />
      {/snippet}
    </Field>

    <Field label="Criteria" labelFor="criteria">
      {#snippet fieldContent()}
        <CriteriaRowDuplicate bind:this={criteriasDuplicateElem} formProperties={formProperties}/>
      {/snippet}
    </Field>

    <div class="row justify-content-between mt-3">
      <div class="col-auto">
        <button type="button" class="btn btn-secondary" onclick={closeForm}>{Labels.get('close')}</button>
      </div>
      <div class="col-auto">
        <button type="button" class="btn btn-primary" onclick={saveFilter}>{Labels.get('save')}</button>
      </div>
    </div>
  </form>

{/await}
