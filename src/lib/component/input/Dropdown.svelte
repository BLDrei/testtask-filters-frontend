<script>
  import {onMount} from "svelte";

  let { name, value = $bindable(''), className = 'form-select', required = true, options, onchange = null, selectFirst = false } = $props();

  export function getValue() {
    return value || null;
  }

  if (selectFirst && options.length > 0) {
    onMount(() => {
      value = options[0].value;
    })
  }
</script>

<select
    name={name}
    class={className}
    bind:value={value}
    required={required}
    onchange={onchange}>
  {#each options as option}
    <option value={option.value}>{option.text}</option>
  {/each}
</select>
