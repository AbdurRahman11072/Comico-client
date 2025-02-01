type description = {
  description: string;
};
export function Synopsis(description: description) {
  return (
    <div className="space-y-6">
      <div className="bg-slate-200/20 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Summary</h2>
        <p className="text-gray-300 leading-relaxed">
          {description?.description}
        </p>
        <button className="text-purple-400 mt-2">Show more</button>
      </div>

      <div className="bg-slate-200/20 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Published by</h2>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gray-800 rounded-full" />
          <div>
            <div className="font-medium">Iken</div>
            <div className="text-sm text-gray-400">
              Striving to dazzle myself.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
