# Reusable GA4 cursor flows

These flows are distilled from the executed GA4 admin work in this workspace. They are route recipes with visible checkpoints; they intentionally do not contain account IDs, credentials, or product-specific secrets.

## Flow A: edit an existing Web stream

```text
Admin > Data streams > Web > select the exact host > Edit web stream
  -> verify host and stream name
  -> change only the approved field
  -> Update stream
  -> reopen/details check
```

Observed visible controls include `編輯網站串流設定` and `更新串流`. The saved run recorded these as element-index actions; re-query the current state before using them because indices change after navigation.

Last-run hints (not stable selectors): the edit control was observed at element index `58`, and the update control at `91`. Treat these as a route/debug hint only.

Use this for a production-host correction, such as replacing a deployment preview hostname with the verified public hostname. Do not delete the old stream when a safe edit preserves its Measurement ID and history.

## Flow B: create a property and Web stream

```text
Admin > Create
  -> Property/resource
  -> property name
  -> next
  -> choose Web
  -> enter verified production host
  -> enter canonical stream name
  -> Create stream and continue
  -> capture stream details and Measurement ID
```

Observed labels in the executed run include `建立`, `資源`, `屬性名稱`, `下一步`, `網站`, `網址`, `串流名稱`, and `建立並繼續`. The flow was reused for multiple product surfaces; only the property name, host, and stream name changed.

The actual batch seed used these canonical names:

```text
TAIEC   | Web | taiec.site.com.tw
Mindset | Web | mindset.hyphen-network.com
Sparkie | Web | sparkie.hyphen-network.com
Cuckoo  | Web | cuckoo.hyphen-network.com
```

The host and property must still be verified against the current inventory before submission. The name pattern is reusable; the Admin result is not assumed.

## Flow C: batch independent product streams

```text
prepare queue
  -> choose/create property
  -> fill one stable form
  -> create Web stream
  -> capture result
  -> verify host/ID
  -> return to the known Admin route
  -> continue next queue item
```

Do not submit the next item until the current result is captured. The executed run used a visible coordinate fallback for one `建立並繼續` control at `[1350, 75]` in a `1440x900` viewport. Treat this as a conditional fallback only; use a fresh semantic locator when available.

Other last-run element-index hints were `37` for the property-form `下一步`, `40` for `建立資源`, and `33` for one stream submission. These are intentionally retained to help a future agent recognize the route, never to skip the fresh-state check.

## Flow D: verify after code deploy

```text
open exact production host
  -> check one Google tag/Measurement ID
  -> page_view in Realtime
  -> click a known CTA
  -> cta_click in DebugView with cta_id/cta_location/destination_type
  -> run success path
  -> confirm outcome event exactly once
```

The flow is complete only when the code surface and Admin evidence agree. A stream existing in Admin is not the same as a live tag sending data.

## Flow metadata template

```json
{
  "flow_id": "create_web_property_and_stream",
  "preconditions": {
    "route_signature": "Admin > Create",
    "viewport": "record-at-run-time",
    "locale": "record-at-run-time"
  },
  "actions": [
    {
      "label": "建立並繼續",
      "locator": {"type": "semantic_text", "value": "建立並繼續"},
      "coordinate_fallback": null,
      "wait_for": "stream details"
    }
  ],
  "stop_conditions": ["host mismatch", "unexpected account", "validation error"]
}
```
