exports.seed = async function(knex, Promise) {
  await knex('tags').del()
  await knex('tags').insert(tags.map(addTimestamps).map(setUUID))
}

const tags = [
  { id: '0001', name: 'オーストラリア' },
  { id: '0002', name: 'ニュージーランド' },
  { id: '0003', name: 'カナダ' },
  { id: '0004', name: '韓国' },
  { id: '0005', name: 'フランス' },
  { id: '0006', name: 'ドイツ' },
  { id: '0007', name: 'イギリス' },
  { id: '0008', name: 'アイルランド' },
  { id: '0009', name: 'デンマーク' },
  { id: '0010', name: '台湾' },
  { id: '0011', name: '香港' },
  { id: '0012', name: 'ノルウェー' },
  { id: '0013', name: 'ポーランド' },
  { id: '0014', name: 'ポルトガル' },
  { id: '0015', name: 'スロバキア' },
  { id: '0016', name: 'オーストリア' },
  { id: '0017', name: 'ハンガリー' },
  { id: '0018', name: 'スペイン' },
  { id: '0019', name: 'アイスランド' },
]

function setUUID(obj) {
  return {
    ...obj,
    id: '00000000-0000-0000-0000-00000000' + obj.id,
  }
}

function addTimestamps(obj) {
  return {
    ...obj,
    created_at: new Date(),
    updated_at: new Date(),
  }
}
