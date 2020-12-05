# All-in-one domain testing utility

* For full documentation visit [Netlify|Docs](https://docs.netlify.com).
* For support visit [Netlify|Community](https://community.netlify.com).

## Sample results with external DNS

```
|============== Check domain info for Netlify sites =============

|====================== whois registrar for =====================
| ------------------------ greg-raven.us ------------------------
Registrar URL: http://www.namecheap.com
Registrar URL: http://www.namecheap.com



|===================== whois name server for ====================
| ------------------------ greg-raven.us ------------------------
Name Server: dns2.registrar-servers.com
Name Server: dns1.registrar-servers.com
Name Server: dns1.registrar-servers.com
Name Server: dns2.registrar-servers.com



|==================== dig name server(s) for ====================
| ------------------------ greg-raven.us ------------------------
| ------------------- should agree with whois -------------------
dns1.registrar-servers.com.
dns2.registrar-servers.com.

| ---------------------- www.greg-raven.us ----------------------
| ------------ blank if pointing to the apex domain -------------



|====================== dig A record(s) for =====================
| ------------------------ greg-raven.us ------------------------
| ------------ Netlify's load balancer: 104.198.14.52 -----------
104.198.14.52
Organization:   Google LLC (GOOGL-2)

| ---------------------- www.greg-raven.us ----------------------
104.248.78.24
165.227.12.111
Organization:   DigitalOcean, LLC (DO-13)



|======================= dig CNAME(s) for =======================
| ---------------------- www.greg-raven.us ----------------------
| ---------------- will be blank for Netlify DNS ----------------
netlify-pilot.netlify.app.



|================== check for inactive DNS zone =================
| --------------- last line should show nsone.net ---------------
;; Received 656 bytes from 156.154.124.70#53(a.cctld.us) in 19 ms

greg-raven.us.		1800	IN	NS	dns1.registrar-servers.com.
greg-raven.us.		1800	IN	NS	dns2.registrar-servers.com.
;; Received 101 bytes from 156.154.132.200#53(dns1.registrar-servers.com) in 17 ms



|==================== whois check for DNSSEC ====================
| --------------------- should be unsigned ----------------------
DNSSEC: unsigned
DNSSEC: unsigned



|===================== curl check for server ====================
| ---------------------- should be Netlify ----------------------
| ------------------------ greg-raven.us ------------------------
< Server: Netlify

| ---------------------- www.greg-raven.us ----------------------
< Server: Netlify



|======================== host check for ========================
| ------------------------ greg-raven.us ------------------------
greg-raven.us has address 104.198.14.52
greg-raven.us mail is handled by 20 eforward5.registrar-servers.com.
greg-raven.us mail is handled by 15 eforward4.registrar-servers.com.
greg-raven.us mail is handled by 10 eforward1.registrar-servers.com.
greg-raven.us mail is handled by 10 eforward2.registrar-servers.com.
greg-raven.us mail is handled by 10 eforward3.registrar-servers.com.

| ---------------------- www.greg-raven.us ----------------------
www.greg-raven.us has address 159.65.216.232
www.greg-raven.us has address 104.248.50.87
www.greg-raven.us has IPv6 address 2604:a880:400:d1::888:7001
www.greg-raven.us has IPv6 address 2604:a880:400:d1::89c:7001



|======================== https check for =======================
| ------------------------ greg-raven.us ------------------------
HTTP/1.1 301 Moved Permanently
Age: 0
Cache-Control: public, max-age=0, must-revalidate
Connection: keep-alive
Content-Length: 42
Content-Type: text/plain
Date: Sat, 05 Dec 2020 12:25:02 GMT
Location: https://www.greg-raven.us/
Server: Netlify
Strict-Transport-Security: max-age=31536000
X-NF-Request-ID: 1e33d439-3070-41ff-adb5-28dca83c9da3-31648910

Redirecting to https://www.greg-raven.us/



| ---------------------- www.greg-raven.us ----------------------
HTTP/1.1 200 OK
Age: 0
Cache-Control: public, max-age=0, must-revalidate
Connection: keep-alive
Content-Encoding: gzip
Content-Type: text/html; charset=UTF-8
Date: Sat, 05 Dec 2020 12:25:03 GMT
Etag: "72ac86ff1582b661547f13c0dacb0875-ssl-df"
Server: Netlify
Strict-Transport-Security: max-age=31536000
Transfer-Encoding: chunked
Vary: Accept-Encoding
X-NF-Request-ID: c395252f-6c4e-414d-8080-ed8a171a9879-63907585

<!DOCTYPE html>
<html lang="en">
    <head>
        &hellip;
    </head>
    <body class="homepage">
        &hellip;
    </body>
</html>



|====================== httpstat check for ======================
| ------------------------ greg-raven.us ------------------------
Connected to 104.198.14.52:80 from 192.168.1.9:62150

HTTP/1.1 301 Moved Permanently
Cache-Control: public, max-age=0, must-revalidate
Content-Length: 38
Content-Type: text/plain
Date: Sat, 05 Dec 2020 04:50:48 GMT
Location: https://greg-raven.us/
Age: 27254
Connection: keep-alive
Server: Netlify
X-NF-Request-ID: 1e33d439-3070-41ff-adb5-28dca83c9da3-31649296

Body stored in: /var/folders/tn/w17_9wjn5n92wxtm5r6tlcbc0000gp/T/tmpPICmJc

  DNS Lookup   TCP Connection   Server Processing   Content Transfer
[     2ms    |      49ms      |       53ms        |        1ms       ]
             |                |                   |                  |
    namelookup:2ms            |                   |                  |
                        connect:51ms              |                  |
                                      starttransfer:104ms            |
                                                                 total:105ms



| ---------------------- www.greg-raven.us ----------------------
Connected to 159.65.216.232:80 from 192.168.1.9:62151

HTTP/1.1 301 Moved Permanently
Cache-Control: public, max-age=0, must-revalidate
Content-Length: 42
Content-Type: text/plain
Date: Sat, 05 Dec 2020 12:25:01 GMT
Location: https://www.greg-raven.us/
Age: 2
Connection: keep-alive
Server: Netlify
X-NF-Request-ID: ac4acee9-ff14-4f47-9622-8f41c6ee93bc-6393200

Body stored in: /var/folders/tn/w17_9wjn5n92wxtm5r6tlcbc0000gp/T/tmpzUDURs

  DNS Lookup   TCP Connection   Server Processing   Content Transfer
[     2ms    |      91ms      |       97ms        |        0ms       ]
             |                |                   |                  |
    namelookup:2ms            |                   |                  |
                        connect:93ms              |                  |
                                      starttransfer:190ms            |
                                                                 total:190ms



|================== check SSL certificate dates =================
| ------------------------ greg-raven.us ------------------------
Version: 2.0.6-static
OpenSSL 1.1.1h  22 Sep 2020

Connected to 104.198.14.52

Testing SSL server greg-raven.us on port 443 using SNI name greg-raven.us

  SSL/TLS Protocols:
SSLv2     disabled
SSLv3     disabled
TLSv1.0   disabled
TLSv1.1   disabled
TLSv1.2   enabled
TLSv1.3   enabled

  TLS Fallback SCSV:
Server supports TLS Fallback SCSV

  TLS renegotiation:
Session renegotiation not supported

  TLS Compression:
OpenSSL version does not support compression
Rebuild with zlib1g-dev package for zlib support

  Heartbleed:
TLSv1.3 not vulnerable to heartbleed
TLSv1.2 not vulnerable to heartbleed

  Supported Server Cipher(s):
Preferred TLSv1.3  256 bits  TLS_AES_256_GCM_SHA384        Curve 25519 DHE 253
Accepted  TLSv1.3  256 bits  TLS_CHACHA20_POLY1305_SHA256  Curve 25519 DHE 253
Accepted  TLSv1.3  128 bits  TLS_AES_128_GCM_SHA256        Curve 25519 DHE 253
Preferred TLSv1.2  256 bits  ECDHE-RSA-AES256-GCM-SHA384   Curve 25519 DHE 253
Accepted  TLSv1.2  256 bits  ECDHE-RSA-CHACHA20-POLY1305   Curve 25519 DHE 253
Accepted  TLSv1.2  128 bits  ECDHE-RSA-AES128-GCM-SHA256   Curve 25519 DHE 253
Accepted  TLSv1.2  256 bits  DHE-RSA-AES256-GCM-SHA384     DHE 2048 bits
Accepted  TLSv1.2  128 bits  DHE-RSA-AES128-GCM-SHA256     DHE 2048 bits
Accepted  TLSv1.2  128 bits  ECDHE-RSA-AES128-SHA256       Curve 25519 DHE 253
Accepted  TLSv1.2  128 bits  DHE-RSA-AES128-SHA256         DHE 2048 bits

  Server Key Exchange Group(s):
TLSv1.3  128 bits  secp256r1 (NIST P-256)
TLSv1.3  192 bits  secp384r1 (NIST P-384)
TLSv1.3  260 bits  secp521r1 (NIST P-521)
TLSv1.3  128 bits  x25519
TLSv1.3  224 bits  x448
TLSv1.2  128 bits  secp256r1 (NIST P-256)
TLSv1.2  192 bits  secp384r1 (NIST P-384)
TLSv1.2  260 bits  secp521r1 (NIST P-521)
TLSv1.2  128 bits  x25519
TLSv1.2  224 bits  x448

  Server Signature Algorithm(s):
TLSv1.3  rsa_pss_rsae_sha256
TLSv1.3  rsa_pss_rsae_sha384
TLSv1.3  rsa_pss_rsae_sha512
TLSv1.2  rsa_pkcs1_sha224
TLSv1.2  rsa_pkcs1_sha256
TLSv1.2  rsa_pkcs1_sha384
TLSv1.2  rsa_pkcs1_sha512
TLSv1.2  rsa_pss_rsae_sha256
TLSv1.2  rsa_pss_rsae_sha384
TLSv1.2  rsa_pss_rsae_sha512

  SSL Certificate:
Signature Algorithm: sha256WithRSAEncryption
RSA Key Strength:    2048

Subject:  greg-raven.us
Altnames: DNS:greg-raven.us, DNS:www.greg-raven.us
Issuer:   Let's Encrypt Authority X3

Not valid before: Nov 28 19:00:31 2020 GMT
Not valid after:  Feb 26 19:00:31 2021 GMT

| ---------------------- www.greg-raven.us ----------------------
Version: 2.0.6-static
OpenSSL 1.1.1h  22 Sep 2020

Connected to 159.65.216.232

Testing SSL server www.greg-raven.us on port 443 using SNI name www.greg-raven.us

  SSL/TLS Protocols:
SSLv2     disabled
SSLv3     disabled
TLSv1.0   disabled
TLSv1.1   disabled
TLSv1.2   enabled
TLSv1.3   enabled

  TLS Fallback SCSV:
Server supports TLS Fallback SCSV

  TLS renegotiation:
Session renegotiation not supported

  TLS Compression:
OpenSSL version does not support compression
Rebuild with zlib1g-dev package for zlib support

  Heartbleed:
TLSv1.3 not vulnerable to heartbleed
TLSv1.2 not vulnerable to heartbleed

  Supported Server Cipher(s):
Preferred TLSv1.3  256 bits  TLS_AES_256_GCM_SHA384        Curve 25519 DHE 253
Accepted  TLSv1.3  256 bits  TLS_CHACHA20_POLY1305_SHA256  Curve 25519 DHE 253
Accepted  TLSv1.3  128 bits  TLS_AES_128_GCM_SHA256        Curve 25519 DHE 253
Preferred TLSv1.2  256 bits  ECDHE-RSA-AES256-GCM-SHA384   Curve 25519 DHE 253
Accepted  TLSv1.2  256 bits  ECDHE-RSA-CHACHA20-POLY1305   Curve 25519 DHE 253
Accepted  TLSv1.2  128 bits  ECDHE-RSA-AES128-GCM-SHA256   Curve 25519 DHE 253
Accepted  TLSv1.2  256 bits  DHE-RSA-AES256-GCM-SHA384     DHE 2048 bits
Accepted  TLSv1.2  128 bits  DHE-RSA-AES128-GCM-SHA256     DHE 2048 bits
Accepted  TLSv1.2  128 bits  ECDHE-RSA-AES128-SHA256       Curve 25519 DHE 253
Accepted  TLSv1.2  128 bits  DHE-RSA-AES128-SHA256         DHE 2048 bits

  Server Key Exchange Group(s):
TLSv1.3  128 bits  secp256r1 (NIST P-256)
TLSv1.3  192 bits  secp384r1 (NIST P-384)
TLSv1.3  260 bits  secp521r1 (NIST P-521)
TLSv1.3  128 bits  x25519
TLSv1.3  224 bits  x448
TLSv1.2  128 bits  secp256r1 (NIST P-256)
TLSv1.2  192 bits  secp384r1 (NIST P-384)
TLSv1.2  260 bits  secp521r1 (NIST P-521)
TLSv1.2  128 bits  x25519
TLSv1.2  224 bits  x448

  Server Signature Algorithm(s):
TLSv1.3  rsa_pss_rsae_sha256
TLSv1.3  rsa_pss_rsae_sha384
TLSv1.3  rsa_pss_rsae_sha512
TLSv1.2  rsa_pkcs1_sha224
TLSv1.2  rsa_pkcs1_sha256
TLSv1.2  rsa_pkcs1_sha384
TLSv1.2  rsa_pkcs1_sha512
TLSv1.2  rsa_pss_rsae_sha256
TLSv1.2  rsa_pss_rsae_sha384
TLSv1.2  rsa_pss_rsae_sha512

  SSL Certificate:
Signature Algorithm: sha256WithRSAEncryption
RSA Key Strength:    2048

Subject:  greg-raven.us
Altnames: DNS:greg-raven.us, DNS:www.greg-raven.us
Issuer:   Let's Encrypt Authority X3

Not valid before: Nov 28 19:00:31 2020 GMT
Not valid after:  Feb 26 19:00:31 2021 GMT
Saving session...
...copying shared history...
...saving history...truncating history files...
...completed.

[Process completed]
```

## Sample results with Netlify

```
|============== Check domain info for Netlify sites =============

|====================== whois registrar for =====================
| ----------------------- gregraven.info -----------------------
Registrar URL: www.namecheap.com
Registrar URL: http://www.namecheap.com



|===================== whois name server for ====================
| ----------------------- gregraven.info -----------------------
Name Server: DNS1.P04.NSONE.NET
Name Server: DNS2.P04.NSONE.NET
Name Server: DNS3.P04.NSONE.NET
Name Server: DNS4.P04.NSONE.NET
Name Server: dns1.p04.nsone.net
Name Server: dns2.p04.nsone.net
Name Server: dns3.p04.nsone.net
Name Server: dns4.p04.nsone.net



|==================== dig name server(s) for ====================
| ----------------------- gregraven.info -----------------------
| ------------------- should agree with whois -------------------
dns2.p04.nsone.net.
dns3.p04.nsone.net.
dns4.p04.nsone.net.
dns1.p04.nsone.net.

| --------------------- www.gregraven.info ---------------------
| ------------ blank if pointing to the apex domain -------------



|====================== dig A record(s) for =====================
| ----------------------- gregraven.info -----------------------
| ------------ Netlify's load balancer: 104.198.14.52 -----------
192.81.212.192
157.245.130.6
Organization:   RIPE Network Coordination Centre (RIPE)

| --------------------- www.gregraven.info ---------------------
159.65.216.232
104.248.63.248
Organization:   DigitalOcean, LLC (DO-13)



|======================= dig CNAME(s) for =======================
| --------------------- www.gregraven.info ---------------------
| ---------------- will be blank for Netlify DNS ----------------



|================== check for inactive DNS zone =================
| --------------- last line should show nsone.net ---------------
gregraven.info.		3600	IN	NS	dns1.p04.nsone.net.
gregraven.info.		3600	IN	NS	dns2.p04.nsone.net.
gregraven.info.		3600	IN	NS	dns3.p04.nsone.net.
gregraven.info.		3600	IN	NS	dns4.p04.nsone.net.
;; Received 132 bytes from 198.51.44.4#53(dns1.p04.nsone.net) in 15 ms



|==================== whois check for DNSSEC ====================
| --------------------- should be unsigned ----------------------
DNSSEC: unsigned
DNSSEC: unsigned



|===================== curl check for server ====================
| ---------------------- should be Netlify ----------------------
| ----------------------- gregraven.info -----------------------
< Server: Netlify

| --------------------- www.gregraven.info ---------------------
< Server: Netlify



|======================== host check for ========================
| ----------------------- gregraven.info -----------------------
gregraven.info has address 167.172.221.254
gregraven.info has address 165.227.12.111
gregraven.info has IPv6 address 2604:a880:2:d1::fb:7001
gregraven.info has IPv6 address 2604:a880:2:d0::1541:1001
gregraven.info mail is handled by 20 mx2.improvmx.com.
gregraven.info mail is handled by 10 mx1.improvmx.com.

| --------------------- www.gregraven.info ---------------------
www.gregraven.info has address 104.248.60.43
www.gregraven.info has address 162.243.166.170
www.gregraven.info has IPv6 address 2604:a880:400:d1::89c:7001
www.gregraven.info has IPv6 address 2604:a880:400:d1::888:7001



|======================== https check for =======================
| ----------------------- gregraven.info -----------------------
HTTP/1.1 301 Moved Permanently
Age: 0
Cache-Control: public, max-age=0, must-revalidate
Connection: keep-alive
Content-Length: 43
Content-Security-Policy: frame-ancestors 'none'
Content-Type: text/plain
Date: Sat, 05 Dec 2020 12:28:03 GMT
Location: https://www.gregraven.info/
Referrer-Policy: no-referrer
Server: Netlify
Strict-Transport-Security: max-age=31536000
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-NF-Request-ID: ccfddf35-9c5d-470f-8af3-5c4aec4d5ff5-6350058
X-Xss-Protection: 1; mode=block

Redirecting to https://www.gregraven.info/



| --------------------- www.gregraven.info ---------------------
HTTP/1.1 200 OK
Age: 0
Cache-Control: public, max-age=0, must-revalidate
Connection: keep-alive
Content-Encoding: gzip
Content-Security-Policy: frame-ancestors 'none'
Content-Type: text/html; charset=UTF-8
Date: Sat, 05 Dec 2020 12:28:03 GMT
Etag: "5f18dbe7d4e13acba89b1a1610fa65ba-ssl-df"
Referrer-Policy: no-referrer
Server: Netlify
Strict-Transport-Security: max-age=31536000
Transfer-Encoding: chunked
Vary: Accept-Encoding
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-NF-Request-ID: 75651deb-69f7-4d40-af9f-862208973cdc-81032901
X-Xss-Protection: 1; mode=block

<!DOCTYPE html>
<html lang="en">
    <head>
        &hellip;
    </head>
    <body class="homepage">
        &hellip;
    </body>
</html>



|====================== httpstat check for ======================
| ----------------------- gregraven.info -----------------------
Connected to 165.227.12.111:80 from 192.168.1.9:62536

HTTP/1.1 301 Moved Permanently
Cache-Control: public, max-age=0, must-revalidate
Content-Length: 39
Content-Security-Policy: frame-ancestors 'none'
Content-Type: text/plain
Date: Sat, 05 Dec 2020 12:28:02 GMT
Location: https://gregraven.info/
Referrer-Policy: no-referrer
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-Xss-Protection: 1; mode=block
Age: 2
Connection: keep-alive
Server: Netlify
X-NF-Request-ID: 9681a63c-57b3-415a-9f89-50fba5110aa2-1275969

Body stored in: /var/folders/tn/w17_9wjn5n92wxtm5r6tlcbc0000gp/T/tmphrR0cH

  DNS Lookup   TCP Connection   Server Processing   Content Transfer
[     2ms    |      23ms      |       29ms        |        0ms       ]
             |                |                   |                  |
    namelookup:2ms            |                   |                  |
                        connect:25ms              |                  |
                                      starttransfer:54ms             |
                                                                 total:54ms



| --------------------- www.gregraven.info ---------------------
Connected to 104.248.60.43:80 from 192.168.1.9:62537

HTTP/1.1 301 Moved Permanently
Cache-Control: public, max-age=0, must-revalidate
Content-Length: 43
Content-Security-Policy: frame-ancestors 'none'
Content-Type: text/plain
Date: Fri, 04 Dec 2020 21:31:36 GMT
Location: https://www.gregraven.info/
Referrer-Policy: no-referrer
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-Xss-Protection: 1; mode=block
Age: 53788
Connection: keep-alive
Server: Netlify
X-NF-Request-ID: cf50de2e-ab50-4900-8ad3-72a206c87111-8154309

Body stored in: /var/folders/tn/w17_9wjn5n92wxtm5r6tlcbc0000gp/T/tmpDYsJES

  DNS Lookup   TCP Connection   Server Processing   Content Transfer
[     2ms    |      95ms      |       101ms       |        0ms       ]
             |                |                   |                  |
    namelookup:2ms            |                   |                  |
                        connect:97ms              |                  |
                                      starttransfer:198ms            |
                                                                 total:198ms



|================== check SSL certificate dates =================
| ----------------------- gregraven.info -----------------------
Version: 2.0.6-static
OpenSSL 1.1.1h  22 Sep 2020

Connected to 165.227.12.111

Testing SSL server gregraven.info on port 443 using SNI name gregraven.info

  SSL/TLS Protocols:
SSLv2     disabled
SSLv3     disabled
TLSv1.0   disabled
TLSv1.1   disabled
TLSv1.2   enabled
TLSv1.3   enabled

  TLS Fallback SCSV:
Server supports TLS Fallback SCSV

  TLS renegotiation:
Session renegotiation not supported

  TLS Compression:
OpenSSL version does not support compression
Rebuild with zlib1g-dev package for zlib support

  Heartbleed:
TLSv1.3 not vulnerable to heartbleed
TLSv1.2 not vulnerable to heartbleed

  Supported Server Cipher(s):
Preferred TLSv1.3  256 bits  TLS_AES_256_GCM_SHA384        Curve 25519 DHE 253
Accepted  TLSv1.3  256 bits  TLS_CHACHA20_POLY1305_SHA256  Curve 25519 DHE 253
Accepted  TLSv1.3  128 bits  TLS_AES_128_GCM_SHA256        Curve 25519 DHE 253
Preferred TLSv1.2  256 bits  ECDHE-RSA-AES256-GCM-SHA384   Curve 25519 DHE 253
Accepted  TLSv1.2  256 bits  ECDHE-RSA-CHACHA20-POLY1305   Curve 25519 DHE 253
Accepted  TLSv1.2  128 bits  ECDHE-RSA-AES128-GCM-SHA256   Curve 25519 DHE 253
Accepted  TLSv1.2  256 bits  DHE-RSA-AES256-GCM-SHA384     DHE 2048 bits
Accepted  TLSv1.2  128 bits  DHE-RSA-AES128-GCM-SHA256     DHE 2048 bits
Accepted  TLSv1.2  128 bits  ECDHE-RSA-AES128-SHA256       Curve 25519 DHE 253
Accepted  TLSv1.2  128 bits  DHE-RSA-AES128-SHA256         DHE 2048 bits

  Server Key Exchange Group(s):
TLSv1.3  128 bits  secp256r1 (NIST P-256)
TLSv1.3  192 bits  secp384r1 (NIST P-384)
TLSv1.3  260 bits  secp521r1 (NIST P-521)
TLSv1.3  128 bits  x25519
TLSv1.3  224 bits  x448
TLSv1.2  128 bits  secp256r1 (NIST P-256)
TLSv1.2  192 bits  secp384r1 (NIST P-384)
TLSv1.2  260 bits  secp521r1 (NIST P-521)
TLSv1.2  128 bits  x25519
TLSv1.2  224 bits  x448

  Server Signature Algorithm(s):
TLSv1.3  rsa_pss_rsae_sha256
TLSv1.3  rsa_pss_rsae_sha384
TLSv1.3  rsa_pss_rsae_sha512
TLSv1.2  rsa_pkcs1_sha224
TLSv1.2  rsa_pkcs1_sha256
TLSv1.2  rsa_pkcs1_sha384
TLSv1.2  rsa_pkcs1_sha512
TLSv1.2  rsa_pss_rsae_sha256
TLSv1.2  rsa_pss_rsae_sha384
TLSv1.2  rsa_pss_rsae_sha512

  SSL Certificate:
Signature Algorithm: sha256WithRSAEncryption
RSA Key Strength:    2048

Subject:  *.gregraven.info
Altnames: DNS:*.gregraven.info, DNS:gregraven.info
Issuer:   Let's Encrypt Authority X3

Not valid before: Nov 18 00:07:05 2020 GMT
Not valid after:  Feb 16 00:07:05 2021 GMT

| --------------------- www.gregraven.info ---------------------
Version: 2.0.6-static
OpenSSL 1.1.1h  22 Sep 2020

Connected to 104.248.60.43

Testing SSL server www.gregraven.info on port 443 using SNI name www.gregraven.info

  SSL/TLS Protocols:
SSLv2     disabled
SSLv3     disabled
TLSv1.0   disabled
TLSv1.1   disabled
TLSv1.2   enabled
TLSv1.3   enabled

  TLS Fallback SCSV:
Server supports TLS Fallback SCSV

  TLS renegotiation:
Session renegotiation not supported

  TLS Compression:
OpenSSL version does not support compression
Rebuild with zlib1g-dev package for zlib support

  Heartbleed:
TLSv1.3 not vulnerable to heartbleed
TLSv1.2 not vulnerable to heartbleed

  Supported Server Cipher(s):
Preferred TLSv1.3  256 bits  TLS_AES_256_GCM_SHA384        Curve 25519 DHE 253
Accepted  TLSv1.3  256 bits  TLS_CHACHA20_POLY1305_SHA256  Curve 25519 DHE 253
Accepted  TLSv1.3  128 bits  TLS_AES_128_GCM_SHA256        Curve 25519 DHE 253
Preferred TLSv1.2  256 bits  ECDHE-RSA-AES256-GCM-SHA384   Curve 25519 DHE 253
Accepted  TLSv1.2  256 bits  ECDHE-RSA-CHACHA20-POLY1305   Curve 25519 DHE 253
Accepted  TLSv1.2  128 bits  ECDHE-RSA-AES128-GCM-SHA256   Curve 25519 DHE 253
Accepted  TLSv1.2  256 bits  DHE-RSA-AES256-GCM-SHA384     DHE 2048 bits
Accepted  TLSv1.2  128 bits  DHE-RSA-AES128-GCM-SHA256     DHE 2048 bits
Accepted  TLSv1.2  128 bits  ECDHE-RSA-AES128-SHA256       Curve 25519 DHE 253
Accepted  TLSv1.2  128 bits  DHE-RSA-AES128-SHA256         DHE 2048 bits

  Server Key Exchange Group(s):
TLSv1.3  128 bits  secp256r1 (NIST P-256)
TLSv1.3  192 bits  secp384r1 (NIST P-384)
TLSv1.3  260 bits  secp521r1 (NIST P-521)
TLSv1.3  128 bits  x25519
TLSv1.3  224 bits  x448
TLSv1.2  128 bits  secp256r1 (NIST P-256)
TLSv1.2  192 bits  secp384r1 (NIST P-384)
TLSv1.2  260 bits  secp521r1 (NIST P-521)
TLSv1.2  128 bits  x25519
TLSv1.2  224 bits  x448

  Server Signature Algorithm(s):
TLSv1.3  rsa_pss_rsae_sha256
TLSv1.3  rsa_pss_rsae_sha384
TLSv1.3  rsa_pss_rsae_sha512
TLSv1.2  rsa_pkcs1_sha224
TLSv1.2  rsa_pkcs1_sha256
TLSv1.2  rsa_pkcs1_sha384
TLSv1.2  rsa_pkcs1_sha512
TLSv1.2  rsa_pss_rsae_sha256
TLSv1.2  rsa_pss_rsae_sha384
TLSv1.2  rsa_pss_rsae_sha512

  SSL Certificate:
Signature Algorithm: sha256WithRSAEncryption
RSA Key Strength:    2048

Subject:  *.gregraven.info
Altnames: DNS:*.gregraven.info, DNS:gregraven.info
Issuer:   Let's Encrypt Authority X3

Not valid before: Nov 18 00:07:05 2020 GMT
Not valid after:  Feb 16 00:07:05 2021 GMT
Saving session...
...copying shared history...
...saving history...truncating history files...
...completed.

[Process completed]
```
