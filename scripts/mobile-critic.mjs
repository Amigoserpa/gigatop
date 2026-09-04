import fs from 'node:fs';
import path from 'node:path';

const owner = '/home/superagent/gigatop-creative-core/phase4/owner-review';
const imagePath = path.join(owner, 'homepage-mobile-release.png');
const image = `data:image/png;base64,${fs.readFileSync(imagePath).toString('base64')}`;
const prompt = `Review this complete 390px-wide mobile homepage screenshot independently. It is the Gigatop Private AI homepage in Swiss German. Judge composition, hierarchy, type legibility, section rhythm, touch clarity, fatigue, horizontal overflow, preservation of Local Boundary, Evidence Line, Human Gate, physical infrastructure evidence, and whether it feels separately composed rather than stacked desktop. Be strict and do not infer hidden interactions. Return the requested JSON only.`;
const schema = {
  type: 'object',
  additionalProperties: false,
  required: ['mobile_score', 'hierarchy', 'legibility', 'rhythm', 'brand_preservation', 'critical_issues', 'verdict'],
  properties: {
    mobile_score: { type: 'number', minimum: 0, maximum: 10 },
    hierarchy: { type: 'number', minimum: 0, maximum: 10 },
    legibility: { type: 'number', minimum: 0, maximum: 10 },
    rhythm: { type: 'number', minimum: 0, maximum: 10 },
    brand_preservation: { type: 'number', minimum: 0, maximum: 10 },
    critical_issues: { type: 'array', items: { type: 'string' }, maxItems: 5 },
    verdict: { type: 'string' },
  },
};
const response = await fetch('http://127.0.0.1:8000/v1/chat/completions', {
  method: 'POST',
  headers: { 'content-type': 'application/json' },
  body: JSON.stringify({
    model: 'nvidia/Qwen3.6-35B-A3B-NVFP4', temperature: 0, max_tokens: 900,
    chat_template_kwargs: { enable_thinking: false },
    response_format: { type: 'json_schema', json_schema: { name: 'mobile_homepage_review', strict: true, schema } },
    messages: [{ role: 'system', content: 'You are an exacting mobile web design critic. Score what is visibly rendered.' }, { role: 'user', content: [{ type: 'text', text: prompt }, { type: 'image_url', image_url: { url: image } }] }],
  }),
});
if (!response.ok) throw new Error(`Mobile critic failed: ${response.status} ${await response.text()}`);
const envelope = await response.json();
const result = JSON.parse(envelope.choices[0].message.content.replace(/^```json\s*/i, '').replace(/\s*```$/, ''));
fs.writeFileSync(path.join(owner, 'MOBILE_REVIEW.json'), `${JSON.stringify(result, null, 2)}\n`);
console.log(JSON.stringify(result, null, 2));
