# Troubleshooting

* For full documentation visit [Netlify|Docs](https://docs.netlify.com).
* For support visit [Netlify|Community](https://community.netlify.com).

Use these utilities via the command line, replacing the “apex” value with your “bare” domain name (e.g. domain.com) and the “fqdn” value with your fully-qualified domain name (e.g. www.domain.com, blog.domain.com, store.domain.com, etc.)

## Determine the domain registrar

This utility scans the whois report for the apex domain for information about the registrar.

```
#!/bin/sh
apex="greg-raven.us"
fqdn="www.greg-raven.us"
registrar="Registrar URL"
whois $apex | grep "$registrar"
```

**Note:** Because not every whois query returns information in the same format, any blank whois query should be checked by viewing the full whois report.

Your results should look something like:

```
Registrar URL: http://www.namecheap.com
```

## Check for name servers

Whois checks for name servers often contain the duplicates. As long as the information is correct, you can disregard this duplication.

```
#!/bin/sh
apex="greg-raven.us"
fqdn="www.greg-raven.us"
linebreak="\n\n\n"
echo "|============= whois name server for ============"
echo "| ------------ $apex -------------"
whois $apex | grep -i "name server"
echo $linebreak
echo "|============ dig name server(s) for ============"
echo "| ----------- $apex ------------"
echo "| ----------- should agree with whois -----------"
dig $apex -t NS +short
printf "\n"
echo "| ----------- $fqdn -------------"
echo "| ---- blank if pointing to the apex domain -----"
dig $fqdn -t NS +short
```

**Note:** Because not every whois query returns information in the same format, any blank whois query should be checked by viewing the full whois report.

If you are using an external name server, your results will look something like this:

```
dns1.registrar-servers.com.
dns2.registrar-servers.com.
```

If you are using Netlify name servers, your results will look something like this:

```
dns2.p04.nsone.net.
dns3.p04.nsone.net.
dns4.p04.nsone.net.
dns1.p04.nsone.net.
```

## Check DNS A entries

If you are using an external name server, it is important to point your apex domain at the Netlify load balancer IP address.

```
#!/bin/sh
apex="greg-raven.us"
fqdn="www.greg-raven.us"
echo "|============== dig A record(s) for ============="
echo "| ------------- $apex -------------"
echo "| ---- Netlify's load balancer: 104.198.14.52 ---"
dig $apex -t A +short
whois "$(dig $apex -t A +short)" | grep Organization
printf "\n"
echo "| ------------- $fqdn -------------"
dig $fqdn -t A +short
whois "$(dig $fqdn -t A +short)" | grep Organization
```

If you are using an external name server, your results will look something like this:

```
104.198.14.52
Organization:   Google LLC (GOOGL-2)
```

and:

```
104.248.78.24
165.227.12.111
Organization:   DigitalOcean, LLC (DO-13)
```

If you are using Netlify name servers, your results will look something like this:

```
192.81.212.192
157.245.130.6
Organization:   RIPE Network Coordination Centre (RIPE)
```

and

```
159.65.216.232
104.248.63.248
Organization:   DigitalOcean, LLC (DO-13)
```

## Check DNS CNAME entry

If you are using Netlify DNS (as opposed to DNS at your registrar or Cloudflare or some other third party), there will be no CNAME entry. If your DNS is *not* with Netlify, then typically your fqdn (e.g. www.domain.com) will point to your Netlify subdomain (e.g. brave-curie-671954.netlify.app).

```
#!/bin/sh
fqdn="www.greg-raven.us"
echo "|=============== dig CNAME(s) for ==============="
echo "| -------------- $fqdn ---------------"
echo "| -------- will be blank for Netlify DNS --------"
dig $fqdn -t CNAME +short
```

## Check for inactive DNS zone

```
#!/bin/sh
apex="greg-raven.us"
fqdn="www.greg-raven.us"
```

## Check for DNSSEC

Because Netlify currently does not support DNSSEC, if you have DNSSEC enabled at your registrar Netlify will not be able to issue you an SSL certificate.

```
#!/bin/sh
apex="greg-raven.us"
whois $apex | grep "DNSSEC"
```

**Note:** Unless you have a custom wildcard SSL certificate, the certificate for your apex domain will cover all your subdomains as long as their content is in the same server space.

## Check server

Sometimes you may think you have pointed your custom domain to Netlify servers but it is actually still pointing elsewhere. The response to each of these queries should be “Netlify”.

```
#!/bin/sh
apex="greg-raven.us"
fqdn="www.greg-raven.us"
echo "| ----------- $apex ------------"
curl -s -v http://$apex 2>&1 | grep Server
printf "\n"
echo "| ----------- $fqdn -----------"
curl -s -v http://$fqdn 2>&1 | grep Server
```

## Host check

```
#!/bin/sh
apex="greg-raven.us"
fqdn="www.greg-raven.us"
echo "|================ host check for ================"
echo "| --------------- $apex ----------------"
host $apex
printf "\n"
echo "| --------------- $fqdn ---------------"
host $fqdn
```

## HTTPS check

```
#!/bin/sh
apex="greg-raven.us"
https $apex
```

**Note:** You may have to install the https command-line utility. MacOS users may install it using [Homebrew](https://brew.sh).

## HTTPStat check

```
#!/bin/sh
apex="greg-raven.us"
httpstat $apex
```

**Note:** You may have to install the httpstat command-line utility. MacOS users may install it using [Homebrew](https://brew.sh).

## Check SSL

When successful, this report will be verbose. When unsuccessful, it will be terse and basically unusable but still indicate that there is a problem.

```
#!/bin/sh
apex="greg-raven.us"
fqdn="www.greg-raven.us"
echo "|========== check SSL certificate dates ========="
echo "| --------------- $apex ----------------"
sslscan $apex
printf "\n"
echo "| --------------- $fqdn ----------------"
sslscan $fqdn
```

**Note:** You may have to install the sslscan command-line utility. MacOS users may install it using [Homebrew](https://brew.sh).
