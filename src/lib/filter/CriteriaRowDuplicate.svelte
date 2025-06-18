<script>
  import Dropdown from "../component/input/Dropdown.svelte";
  import DateInput from "../component/input/DateInput.svelte";
  import TextInput from "../component/input/TextInput.svelte";
  import NumericInput from "../component/input/NumericInput.svelte";
  import Labels from "../Labels.js";

  const { formProperties } = $props();

  function addLabels(optionsList, prefix = '') {
    if (optionsList == null) return null;

    return optionsList.map(option => {
      return { value: option, text: Labels.get(prefix + option) };
    });
  }

  function createEmptyRow() {
    return {
      valueTypeElem: null,
      valueType: '',

      comparingConditionElem: null,
      comparingCondition: '',

      numericValueElem: null,
      numericValue: null,

      textValueElem: null,
      textValue: '',
      dateValueElem: null,
      dateValue: null,
    };
  }

  let rows = $state([createEmptyRow()]);

  function addRow() {
    rows.push(createEmptyRow());

  }

  function removeRow(index) {
    rows.splice(index, 1);
  }

  export function getValue() {
    return rows.map(row => {
      return {
        type: row.valueTypeElem?.getValue(),
        comparingCondition: row.comparingConditionElem?.getValue(),
        numericValue: row.numericValueElem?.getValue(),
        textValue: row.textValueElem?.getValue(),
        dateValue: row.dateValueElem?.getValue(),
      };
    });
  }
</script>

{#each rows as row, i}
  <div class="row duplicate-row g-2 mb-2">
    <div class={rows.length > 1 ? 'col-md-3' : 'col-md-4'}>
      <Dropdown
          name="valueType"
          bind:this={row.valueTypeElem}
          bind:value={row.valueType}
          options={addLabels(formProperties.valueType.options, 'valueType.')}
          selectFirst={true}
      />
    </div>
    <div class={rows.length > 1 ? 'col-md-3' : 'col-md-4'}>
      <Dropdown
          name="comparingCondition"
          bind:this={row.comparingConditionElem}
          bind:value={row.comparingCondition}
          options={addLabels(
            formProperties.comparingCondition[row.valueType]?.options,
            `condition.${row.valueType}.`
          )}
      />
    </div>
    <div class={rows.length > 1 ? 'col-md-3' : 'col-md-4'}>
      {#if row.valueType === 'amount'}
        <NumericInput
            bind:this={row.numericValueElem}
            bind:value={row.numericValue}
            name="numericValue"
        />
      {:else if row.valueType === 'title'}
        <TextInput
            bind:this={row.textValueElem}
            bind:value={row.textValue}
            name="textValue"
            maxlength={formProperties.textValueMaxLength}
        />
      {:else if row.valueType === 'date'}
        <DateInput
            bind:this={row.dateValueElem}
            bind:value={row.dateValue}
            name="dateValue"
        />
      {/if}
    </div>

    {#if rows.length > 1}
      <div class="col-md-2 offset-md-1">
        <button
            class="btn btn-danger"
            type="button"
            onclick={() => removeRow(i)}>
          {Labels.get('remove-row')}
        </button>
      </div>
    {/if}
  </div>
{/each}

<div class="row">
  <div class="col-md-12 flex">
    <button class="btn btn-primary" type="button" onclick={addRow}>
      Add criteria
    </button>
  </div>
</div>
