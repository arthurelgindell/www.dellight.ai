#!/bin/bash
# Cloudflare Diagnostic Script for dellight.ai
# Run this on your local machine with: bash cloudflare-check.sh

API_TOKEN="fb62c5cec2d1da2827043128ab6162747dff7"

echo "=========================================="
echo "Cloudflare Diagnostic for dellight.ai"
echo "=========================================="
echo ""

# 1. Verify Token
echo "1. Verifying API Token..."
curl -s -X GET "https://api.cloudflare.com/client/v4/user/tokens/verify" \
  -H "Authorization: Bearer $API_TOKEN" \
  -H "Content-Type: application/json" | jq .
echo ""

# 2. List Accounts
echo "2. Listing Accounts..."
ACCOUNTS=$(curl -s -X GET "https://api.cloudflare.com/client/v4/accounts" \
  -H "Authorization: Bearer $API_TOKEN" \
  -H "Content-Type: application/json")
echo "$ACCOUNTS" | jq '.result[] | {id, name}'
ACCOUNT_ID=$(echo "$ACCOUNTS" | jq -r '.result[0].id')
echo "Using Account ID: $ACCOUNT_ID"
echo ""

# 3. List Zones (domains)
echo "3. Listing Zones (Domains)..."
ZONES=$(curl -s -X GET "https://api.cloudflare.com/client/v4/zones" \
  -H "Authorization: Bearer $API_TOKEN" \
  -H "Content-Type: application/json")
echo "$ZONES" | jq '.result[] | {id, name, status, name_servers}'
ZONE_ID=$(echo "$ZONES" | jq -r '.result[] | select(.name=="dellight.ai") | .id')
echo "dellight.ai Zone ID: $ZONE_ID"
echo ""

# 4. Get DNS Records for dellight.ai
if [ -n "$ZONE_ID" ] && [ "$ZONE_ID" != "null" ]; then
  echo "4. DNS Records for dellight.ai..."
  curl -s -X GET "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/dns_records" \
    -H "Authorization: Bearer $API_TOKEN" \
    -H "Content-Type: application/json" | jq '.result[] | {type, name, content, proxied}'
  echo ""
fi

# 5. List Cloudflare Pages Projects
echo "5. Cloudflare Pages Projects..."
curl -s -X GET "https://api.cloudflare.com/client/v4/accounts/$ACCOUNT_ID/pages/projects" \
  -H "Authorization: Bearer $API_TOKEN" \
  -H "Content-Type: application/json" | jq '.result[] | {name, subdomain, domains, source}'
echo ""

# 6. Check specific Pages project details
echo "6. Checking 'dellight-landing' Pages project..."
curl -s -X GET "https://api.cloudflare.com/client/v4/accounts/$ACCOUNT_ID/pages/projects/dellight-landing" \
  -H "Authorization: Bearer $API_TOKEN" \
  -H "Content-Type: application/json" | jq '{name, subdomain, domains, canonical_deployment, latest_deployment}'
echo ""

echo "7. Checking 'dellight-website' Pages project..."
curl -s -X GET "https://api.cloudflare.com/client/v4/accounts/$ACCOUNT_ID/pages/projects/dellight-website" \
  -H "Authorization: Bearer $API_TOKEN" \
  -H "Content-Type: application/json" | jq '{name, subdomain, domains, canonical_deployment, latest_deployment}'
echo ""

echo "=========================================="
echo "Diagnostic Complete"
echo "=========================================="
