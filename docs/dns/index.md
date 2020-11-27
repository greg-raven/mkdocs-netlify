# DNS set-up

For full documentation visit [mkdocs.org](http://mkdocs.org).

## Commands

* `mkdocs new [dir-name]` - Create a new project.
* `mkdocs serve` - Start the live-reloading docs server.
* `mkdocs build` - Build the documentation site.
* `mkdocs help` - Print this help message.

## Project layout

    mkdocs.yml    # The configuration file.
    docs/
        index.md  # The documentation homepage.
        ...       # Other markdown pages, images and other files.

## Comprehensive domain check for sites with Netlify DNS

```
#!/bin/sh
# View the DNS information: -t A, -t Any, -t NS, -t MX, etc.
# add +short for super-abbreviated responses
printf '\e[8;70;100t'
domain="greg-raven.us"
fqdn="www.greg-raven.us"
registrar="Registrar URL"
linebreak="\n\n\n"
echo "|====== Check domain info for Netlify sites ====="
printf "\n"
echo "|================= Registrar for ================"
echo "| ---------------- $domain -----------------"
whois $domain | grep "$registrar"
echo $linebreak
echo "|============= whois name server for ============"
echo "| ------------ $domain -------------"
whois $domain | grep -i "name server"
echo $linebreak
echo "|============ dig name server(s) for ============"
echo "| ----------- $domain ------------"
echo "| ----------- should agree with whois -----------"
dig $domain -t NS +short
printf "\n"
echo "| ----------- $fqdn -------------"
echo "| ---- blank if pointing to the apex domain -----"
dig $fqdn -t NS +short
echo $linebreak
echo "|============== dig A record(s) for ============="
echo "| ------------- $domain -------------"
echo "| ---- Netlify's load balancer: 104.198.14.52 ---"
dig $domain -t A +short
whois "$(dig $domain -t A +short)" | grep Organization
printf "\n"
echo "| ------------- $fqdn -------------"
dig $fqdn -t A +short
whois "$(dig $fqdn -t A +short)" | grep Organization
echo $linebreak
echo "|=============== dig CNAME(s) for ==============="
echo "| -------------- $fqdn ---------------"
echo "| -------- will be blank for Netlify DNS --------"
dig $fqdn -t CNAME +short
echo $linebreak
echo "|=============== check for inactive DNS zone ============"
echo "| ------------ last line should show nsone.net ----------"
dig $domain NS +trace | tail -n 6
echo $linebreak
echo "|============ whois check for DNSSEC ============"
echo "| ------------- should be unsigned --------------"
whois $domain | grep "DNSSEC"
echo $linebreak
echo "|============ curl check for server ============="
echo "| ------------- should be Netlify ---------------"
echo "| ----------- $domain ------------"
curl -s -v http://$domain 2>&1 | grep Server
printf "\n"
echo "| ----------- $fqdn -----------"
curl -s -v http://$fqdn 2>&1 | grep Server
echo $linebreak
echo "|================ host check for ================"
echo "| --------------- $domain ----------------"
host $domain
printf "\n"
echo "| --------------- $fqdn ---------------"
host $fqdn
echo $linebreak
echo "|================ https check for ================"
echo "| --------------- $domain ----------------"
https $domain
printf "\n"
echo "| --------------- $fqdn ---------------"
https $fqdn
echo $linebreak
echo "|================ httpstat check for ================"
echo "| --------------- $domain ----------------"
httpstat $domain
printf "\n"
echo "| --------------- $fqdn ---------------"
httpstat $fqdn
echo $linebreak
echo "|========== check SSL certificate dates ========="
echo "| --------------- $domain ----------------"
sslscan $domain
# openssl s_client -connect $domain:443  2>/dev/null | openssl x509 -noout -dates
printf "\n"
echo "| --------------- $fqdn ----------------"
sslscan $fqdn
# openssl s_client -connect $fqdn:443  2>/dev/null | openssl x509 -noout -dates
```
