# Codex GA4 Portfolio Ops（日本語）

Webサイト、WebApp、Android/iOS/macOSアプリ、デスクトップWebView、サーバー側イベント、AIコーディングエージェント向けの、GA4計測・実装・プライバシー・API・QA運用プレイブックです。

言語：[English](README.md) · [繁體中文](README.zh-Hant.md) · [简体中文](README.zh-Hans.md) · [한국어](README.ko.md) · [Español](README.es.md) · [Português](README.pt-BR.md) · [Français](README.fr.md) · [Deutsch](README.de.md)

## よくある質問

### GA4でmacOSやAndroidアプリを計測できますか？

できます。WebはWeb data stream、ネイティブアプリはFirebase app streamと各プラットフォームSDKを使います。

### `cta_click`と`generate_lead`の違いは？

前者はCTAへの意図、後者は送信・受理されたリードという結果です。クリックを成果として扱いません。

### どのAIツールで使えますか？

CodexとClaude CodeではAgent Skills形式を直接利用できます。Cursor、TRAE、OpenClaw、Hermes Agent、CodeBuddyなどは各ツールのrules/skillsアダプターを使います。

## 対応範囲

GA4実装、イベント命名、CTA計測、コンバージョン、Enhanced Measurement、Consent Mode、PII、Firebase Analytics、Google Ads、BigQuery、Data API、Admin API、Measurement Protocol、Realtime、DebugView、Computer Use QA、AEO glossaryを扱います。

## 公開プロジェクト

[Hyphen Network](https://hyphen-network.com/) · [SideProject](https://sideproject.hyphen-network.com/) · [TAIEC](https://taiec.site.com.tw/) · [Store](https://store.com.tw/) · [Party](https://party.com.tw/)

詳しい仕様は [`references/ga4-lifecycle-map.md`](references/ga4-lifecycle-map.md)、AI runtime分類は [`references/agent-compatibility.md`](references/agent-compatibility.md) を参照してください。

## 公式リンク

[GA4 events](https://developers.google.com/analytics/devguides/collection/ga4/events) · [Agent Skills](https://agentskills.io/home) · [Codex](https://developers.openai.com/codex) · [Claude Code](https://code.claude.com/docs/en/slash-commands) · [Cursor Rules](https://docs.cursor.com/context/rules) · [OpenClaw Skills](https://docs.openclaw.ai/skills)

独立したMITライセンスのプレイブックであり、各サービス提供者の公式・提携文書ではありません。
