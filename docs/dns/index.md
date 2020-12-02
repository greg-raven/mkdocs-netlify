# DNS set-up

* For full documentation visit [Netlify|Docs](https://docs.netlify.com).

## Configure external DNS for a custom domain

Point your apex (bare) domain at the Netlify load balance IP address: 104.198.14.52

Point your www subdomain at the Netlify subdomain of your website.

<table class="table">
	<thead>
		<tr>
			<th>Type</th>
			<th>Host</th>
			<th>Value</th>
			<th>TTL</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>A Record</td>
			<td>@</td>
			<td>104.198.14.52</td>
			<td>Automatic</td>
		</tr>
		<tr>
			<td>CNAME</td>
			<td>www</td>
			<td>brave-curie-671954.netlify.app</td>
			<td>Automatic</td>
		</tr>
	</tbody>
</table>

When you’re done, your DNS settings dashboard should look something like this.

![Configure external DNS for a custom domain](/img/external-dns.png)
