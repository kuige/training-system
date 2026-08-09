<script lang="ts">
	import type { ApplicationForm } from '$lib/types/application';
  import { modeText } from '$lib/utils/textMapping';
  import { locations } from '$lib/mock/location';

	interface Props {
		form: ApplicationForm;
	}

	let { form }: Props = $props();

  function getLocationName(locationId: string) {
    const location = locations.find((loc) => loc.id === locationId);
    return location ? location.name : '';
  }
</script>

<div class="space-y-3 rounded-lg border bg-white p-5">
	<h3 class="text-lg font-bold">报名信息确认</h3>
	<p>
		姓名：
		{form.user.name}
	</p>
	<p>
		电话：
		{form.user.phone}
	</p>
	<p>
		地址：
		{form.user.address}
	</p>
	<p>
		学习方式：
		{modeText[form.training.mode]}
	</p>
	<p>
		培训地点：
		{getLocationName(form.training.locationId || '')}
	</p>
	<p>
		时间：
		{form.training.time ?? '-'}
	</p>
</div>
