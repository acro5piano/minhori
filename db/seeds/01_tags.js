exports.seed = async function(knex, Promise) {
  await knex.raw("SET session_replication_role = 'replica'")
  await knex('tags').del()
  await knex('tags').insert(tags)
  await knex.raw("SET session_replication_role = 'origin'")
}

const tags = [
  { id: 01, name: 'オーストラリア' },
  { id: 02, name: 'ニュージーランド' },
  { id: 03, name: 'カナダ' },
  { id: 04, name: '韓国' },
  { id: 05, name: 'フランス' },
  { id: 06, name: 'ドイツ' },
  { id: 07, name: 'イギリス' },
  { id: 08, name: 'アイルランド' },
  { id: 09, name: 'デンマーク' },
  { id: 10, name: '台湾' },
  { id: 11, name: '香港' },
  { id: 12, name: 'ノルウェー' },
  { id: 13, name: 'ポーランド' },
  { id: 14, name: 'ポルトガル' },
  { id: 15, name: 'スロバキア' },
  { id: 16, name: 'オーストリア' },
  { id: 17, name: 'ハンガリー' },
  { id: 18, name: 'スペイン' },
  { id: 19, name: 'アイスランド' },
]
