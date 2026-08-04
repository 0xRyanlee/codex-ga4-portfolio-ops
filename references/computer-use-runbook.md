# Computer Use runbook for GA4 administration

This runbook is for Codex Computer Use in a visible browser session. It is intentionally independent of account-specific IDs.

## Action-log schema

Append one JSON object per UI action:

```json
{
  "timestamp": "2026-08-04T12:34:56+08:00",
  "project": "example",
  "page": "Admin > Data streams",
  "visible_label": "Create stream",
  "locator": {"type": "element_index", "value": 42},
  "coordinate_fallback": null,
  "action": "click",
  "result": "stream form opened",
  "verification": "pending"
}
```

If coordinates are required, record the viewport and the reason:

```json
{
  "locator": {"type": "coordinate", "x": 1350, "y": 75, "viewport": "1440x900"},
  "coordinate_reason": "visible control had no stable semantic element"
}
```

## Safe interaction loop

1. Read the current Safari state with `sky.get_app_state({app: "com.apple.Safari", disableDiff: true})`.
2. Match the visible account, property, stream host, and control label.
3. Derive a fresh element index from this state; never reuse an index from an earlier state.
4. Perform exactly one action.
5. Read the state again and log the result.
6. Stop on an unexpected account, property, host, warning, or permission boundary.

The log should identify button text and position, but must not contain cookies, tokens, passwords, API secrets, or screen captures with sensitive values. Print the sanitized log at the end of the run and keep the account-specific copy private.

## Admin acceptance checklist

- Correct Google account and property.
- Correct stream type and exact production host.
- Measurement ID captured from the visible stream details, not inferred from a URL.
- Enhanced Measurement decision recorded.
- Realtime page view observed.
- DebugView CTA event observed with expected parameters.
- No duplicate loader or duplicate event.
- Any created API secret is excluded from source and logs; default to not creating one.
